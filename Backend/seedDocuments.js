const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();
const Document = require("./models/Document");

const MONGO_URI = process.env.MONGO_URI;

const seedDocuments = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connecté à MongoDB");
    
    await Document.deleteMany();
    console.log("🗑️ Documents existants supprimés");
    
    const data = JSON.parse(fs.readFileSync("documents.json", "utf-8"));
    console.log(`📄 ${data.length} documents trouvés dans le fichier JSON`);
    
    let insertedCount = 0;
    let skippedCount = 0;
    
    for (const doc of data) {

      
      await Document.create({
        title: doc.title,
        type: doc.type,
        subject: doc.subject,
        class: doc.class,
        level: doc.level,
        fileUrl: doc.fileUrl,
        downloadUrl: doc.downloadUrl,
      });
      insertedCount++;
    }
    
    console.log(`✅ Seeding terminé ! ${insertedCount} documents insérés, ${skippedCount} ignorés.`);
    await mongoose.connection.close();
    console.log("🔌 Connexion MongoDB fermée");
    process.exit(0);
  } catch (err) {
    console.error("❌ Erreur :", err);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDocuments();