// models/Document.js
const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["درس", "تمرين", "مراقبة مستمرة","امتحان"], required: true },
  subject: { type: String, required: true }, 
  class: { type: String, ref: "Class", required: true },
  level:{ type: String , required: true},
  fileUrl: { type: String , required: true},
  downloadUrl: { type: String , required: true},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Document", documentSchema);
