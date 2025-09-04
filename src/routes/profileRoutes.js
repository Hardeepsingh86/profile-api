const express = require("express");
const { createProfile, getProfiles, searchProfiles } = require("../controllers/profileController");

const router = express.Router();

router.post("/", createProfile);       // POST /api/profiles
router.get("/", getProfiles);          // GET /api/profiles
router.get("/search", searchProfiles); // GET /api/profiles/search?q=node

module.exports = router;
