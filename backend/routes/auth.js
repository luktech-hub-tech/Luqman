const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin login
router.post("/login", async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(404).json({msg:"User not found"});
  const isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch) return res.status(400).json({msg:"Invalid password"});
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
  res.json({token,user:{username:user.username,email:user.email}});
});

module.exports = router;
