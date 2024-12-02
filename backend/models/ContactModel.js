const mongoose = require("mongoose");
//sets up contact form schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const ContactModel = mongoose.model(
  "ContactForm",
  ContactSchema,
  "ContactForm"
);
module.exports = ContactModel;
