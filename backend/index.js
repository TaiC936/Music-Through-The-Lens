const express = require("express");
const helmet = require("helmet");
const app = express();
const generateSitemap = require("./sitemapGenerator");

const ContactModel = require("./models/ContactModel");
const cors = require("cors");
const mongoose = require("mongoose");
const NewsletterModel = require("./models/NewsletterModel");
require("dotenv").config();

app.use(helmet());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

// Connection error handling
mongoose.connection.on("error", (err) => {
  console.error("DB connection error:", err);
});

app.post("/createMessage", async (req, res) => {
  try {
    const { name, email, mes } = req.body;
    const newMessage = new ContactModel({ name, email, message: mes });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ error: "Error" });
  }
});

app.post("/createNLEmail", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newEmail = new NewsletterModel({ name, email });
    const savedEmail = await newEmail.save();
    res.json(savedEmail);
  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ error: "Error" });
  }
});

// Sitemap gen
app.get("/sitemap.xml", async (req, res) => {
  try {
    const sitemap = await generateSitemap(
      "https://music-through-the-lens-y3ek.onrender.com"
    );
    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
