const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Profile = require("./src/models/Profile");


dotenv.config();

async function seedDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected...");

    // Clear old profiles
    await Profile.deleteMany();

    // Insert your real profile
    const myProfile = new Profile({
      name: "Hardeep Singh",
      email: "hardeepsingh009k@gmail.com",
      age: 22,
      skills: ["Node.js", "Express", "MongoDB", "React"],
      education: ["B.Tech CSE"],
      projects: [
        {
          title: "Profile API Project",
          description: "A backend API with CRUD operations for profiles.",
          link: "https://github.com/hardeep-singh/profile-api"
        }
      ],
      links: {
        github: "https://github.com/Hardeepsingh86",
        linkedin: "https://linkedin.com/in/hardeep-singh-060a41254",
        portfolio: "https://hardeep.dev"
      },
      bio: "Aspiring software developer, passionate about backend and APIs."
    });

    await myProfile.save();

    console.log("🌱 Profile seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error.message);
    process.exit(1);
  }
}

seedDB();
