const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  clientName: String,
  clientEmail: String,
  whatsapp: String,
  service: String,
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);
