const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Create project request
router.post("/", async (req,res)=>{
  const {clientName,clientEmail,whatsapp,service} = req.body;
  try{
    const project = new Project({clientName,clientEmail,whatsapp,service});
    await project.save();
    res.json({msg:"Project submitted"});
  }catch(err){
    res.status(500).json({msg:"Error"});
  }
});

// Get all projects (admin)
router.get("/", async (req,res)=>{
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
