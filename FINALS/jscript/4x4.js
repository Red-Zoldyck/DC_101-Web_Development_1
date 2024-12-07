const mainImage = document.getElementById('main-image');
const terrainElements = document.querySelectorAll('.terrain');
const systemLinks = document.querySelectorAll(".system-link");
const featuresText = document.getElementById("features-text");

let currentSystem = null; 
let currentTerrain = null; 

const systemContent = {
  "command-trac": `
    The Command-Trac® transfer case is smooth and quiet, yet tough and beefy, so you can tackle challenging terrain with confidence. Whether your quest for adventure takes you up and over the red rocks of Moab or sends you out onto roads buried in fresh snow, your Trail Rated® Wrangler is up for the challenge. Get in, grab on and go.
  `,
  "rock-trac": `
    The Rock-Trac® 4x4 system comes standard on the mighty Rubicon model. Rubicon is the vehicle others are measured against for off-road capability; it was named “4x4 of the Decade” by Four Wheeler magazine. The Rock-Trac 4x4 System gives you more control and more torque, offering superior off-road performance with a 4:1 low-gear ratio that lets you crawl at a lower speed with a greater increase in torque at the wheels.
  `,
};

terrainElements.forEach((terrain) => {
  terrain.addEventListener('click', () => {
    currentTerrain = terrain.getAttribute('data-image'); 
    mainImage.src = currentTerrain; 
    mainImage.alt = terrain.querySelector('span').innerText; 
  });
});

// System functionality
systemLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const system = event.currentTarget.dataset.system;
    const newImage = `img/${system}-detail.jpg`;

    currentSystem = newImage; // Track the current system image
    featuresText.innerHTML = systemContent[system]; // Update features text

    // Only update the main image if no terrain is currently selected
    if (!currentTerrain) {
      mainImage.src = currentSystem;
      mainImage.alt = `${system} system`; // Update alt text
    }

    // Highlight the active system link
    systemLinks.forEach(link => link.classList.remove('active')); // Remove active class
    event.currentTarget.classList.add('active'); // Add active class to the clicked link
  });
});

// Set both defaults independently
const defaultTerrain = document.querySelector('.terrain[data-image="img/2017-jeep-4x4-terrain-hero-mud-wrangler-swamp-outdoors.jpg"]');
const defaultSystem = document.querySelector('.system-link[data-system="command-trac"]');

if (defaultTerrain) {
  defaultTerrain.click(); // Set the default terrain
}

if (defaultSystem) {
  defaultSystem.click(); // Set the default system
}
