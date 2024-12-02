const mongoose = require("mongoose");
//sets up newsletter form schema

const NewsletterSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const NewsletterModel = mongoose.model(
  "NewsletterForm",
  NewsletterSchema,
  "NewsletterForm"
);
module.exports = NewsletterModel;
