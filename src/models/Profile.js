const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  skills: [String],
  education: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String,
    }
  ],
  links: {
    github: String,
    linkedin: String,
    portfolio: String,
  },
  bio: String
});

module.exports = mongoose.model("Profile", profileSchema);
