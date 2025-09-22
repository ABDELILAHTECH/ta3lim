const express = require("express");
const router = express.Router();
const Ressource = require("../models/Document");


router.get("/", async (req, res) => {
  try {
    const ressources = await Ressource.find(); 
    res.json(ressources);
  } catch (error) {
    console.error("Erreur GET /api/ressources:", error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const ressource = new Ressource(req.body);
    await ressource.save();
    res.json(ressource);
  } catch (error) {
    console.error("Erreur POST /api/ressources:", error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
});

module.exports = router;
