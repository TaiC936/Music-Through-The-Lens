const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const ContactModel = require("./models/ContactModel");
const NewsletterModel = require("./models/NewsletterModel");

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "https://mttl.onrender.com"],
        fontSrc: [
          "'self'",
          "https://fonts.gstatic.com",
          "moz-extension:",
          "https:",
          "data:",
          "https://mttl.onrender.com",
        ],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://mttl.onrender.com"],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https:",
          "https://mttl.onrender.com",
        ],
        imgSrc: ["'self'", "data:", "https:", "https://mttl.onrender.com"],
        connectSrc: ["'self'", "https://mttl.onrender.com"],
      },
    },
  })
);

app.use(
  cors({
    origin: "https://mttl.onrender.com",
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

// routes
app.post("/createMessage", async (req, res) => {
  try {
    const { name, email, mes } = req.body;
    const newMessage = new ContactModel({ name, email, message: mes });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ error: "Error creating message" });
  }
});

app.post("/createNLEmail", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newEmail = new NewsletterModel({ name, email });
    const savedEmail = await newEmail.save();
    res.json(savedEmail);
  } catch (err) {
    console.error("Error creating newsletter email:", err);
    res.status(500).json({ error: "Error creating newsletter email" });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "..", "dist")));

// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
