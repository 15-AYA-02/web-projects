const haikus = [
  `"An old silent pond—\nA frog jumps into the pond,\nSplash! Silence again."`,
  `"Winter seclusion—\nListening, that evening,\nTo the rain in the mountain."`,
  `"In the cicada's cry,\nNo sign can foretell\nHow soon it must die."`,
  `"Over the wintry\nforest, winds howl in rage\nwith no leaves to blow."`,
  `"Clouds appear and bring\nTo men a chance to rest\nFrom looking at the moon."`
];

function revealHaiku(element) {
  const haikuText = document.getElementById("haiku-text");
  const box = document.getElementById("haiku-box");

  const randomIndex = Math.floor(Math.random() * haikus.length);
  haikuText.textContent = haikus[randomIndex];
  box.classList.remove("hidden");

  // Optional: small bounce animation on clicked element
  element.style.transform = "scale(1.4)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 300);
}
