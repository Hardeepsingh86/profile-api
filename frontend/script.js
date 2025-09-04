const API_URL = "http://127.0.0.1:5000/api/profiles";


// Load all profiles
async function getAllProfiles() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("Profiles:", data); // Debug log
    const list = document.getElementById("allProfiles");
    list.innerHTML = "";
    data.forEach(profile => {
      const li = document.createElement("li");
      li.textContent = `${profile.name} - ${profile.email} (${profile.skills.join(", ")})`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading profiles:", err);
  }
}

// Create profile
document.getElementById("createForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const profile = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    skills: document.getElementById("skills").value.split(",").map(s => s.trim()),
    bio: document.getElementById("bio").value
  };
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    });
    const data = await res.json();
    console.log("Created:", data); // Debug log
    getAllProfiles(); // Refresh list
  } catch (err) {
    console.error("Error creating profile:", err);
  }
});

// Search profiles
async function searchProfiles() {
  const skill = document.getElementById("searchSkill").value;
  try {
    const res = await fetch(`${API_URL}/search?skill=${skill}`);
    const data = await res.json();
    console.log("Search results:", data); // Debug log
    const list = document.getElementById("results");
    list.innerHTML = "";
    data.forEach(profile => {
      const li = document.createElement("li");
      li.textContent = `${profile.name} - ${profile.skills.join(", ")}`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error searching profiles:", err);
  }
}
