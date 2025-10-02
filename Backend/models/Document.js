// models/Document.js
const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["الدروس", "التمارين", "الفروض", "المراقبة المستمرة", "الامتحانات"], required: true },
  subject: { type: String, required: true }, 
  class: { type: String, required: true },
  level:{ type: String ,enum: ["الابتدائي", "الإعدادي", "الثانوي"] , required: true},
  filiere:{type: String},
  fileUrl: { type: String , required: true},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Document", documentSchema);
