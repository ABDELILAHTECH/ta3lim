const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connecté"))
.catch(err => console.error("Erreur MongoDB:", err));


const ressourceRouter = require("./routes/ressourceRoutes");
app.use("/api/ressources", ressourceRouter);

app.get("/", (req, res) => {
  res.send("Backend fonctionne ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
