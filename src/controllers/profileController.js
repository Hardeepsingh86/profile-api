const Profile = require("../models/Profile");

// Create profile
const createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all profiles
const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search profiles by skill
const searchProfiles = async (req, res) => {
  try {
    const { q } = req.query;
    const profiles = await Profile.find({
      skills: { $regex: q, $options: "i" }
    });
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createProfile, getProfiles, searchProfiles };
