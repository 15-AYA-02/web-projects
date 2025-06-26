const skills = [
  {
    name: "Empathy",
    quote: "Understanding others is the key to leading them."
  },
  {
    name: "Adaptability",
    quote: "Flexibility is the strength of the modern professional."
  },
  {
    name: "Leadership",
    quote: "A true leader inspires, not commands."
  },
  {
    name: "Active Listening",
    quote: "Listening is often more powerful than speaking."
  },
  {
    name: "Problem Solving",
    quote: "Challenges are opportunities dressed in difficulty."
  },
  {
    name: "Emotional Intelligence",
    quote: "Your ability to manage emotion is your invisible advantage."
  },
  {
    name: "Collaboration",
    quote: "Teamwork divides the task and multiplies the success."
  }
];

function showSkill() {
  const index = Math.floor(Math.random() * skills.length);
  const skill = skills[index];
  document.getElementById("skill-name").textContent = skill.name;
  document.getElementById("skill-quote").textContent = `"${skill.quote}"`;
  document.getElementById("skill-box").classList.remove("hidden");
}
