document.addEventListener("DOMContentLoaded", () => {
  const vehiclesLink = document.getElementById("vehicles-link");
  const vehiclesSection = document.getElementById("vehicles-section");
  const closeVehiclesButton = document.getElementById("close-vehicles");

  const capabilitiesLink = document.getElementById("capabilities");
  const capabilitiesSection = document.getElementById("capabilities-section");

  const jeepLifeLink = document.getElementById("jeep-life");
  const jeepLifeSection = document.getElementById("jeep-life-section");

  
  const hamburger = document.querySelector('.hamburger-menu');
  const menuContainer = document.querySelector('.menu-container');

  const hideAllSections = () => {
      if (vehiclesSection) vehiclesSection.classList.add("hidden");
      if (capabilitiesSection) capabilitiesSection.classList.add("hidden");
      if (jeepLifeSection) jeepLifeSection.classList.add("hidden");
  };

  const toggleSectionVisibility = (section) => {
      if (section.classList.contains("hidden")) {
          hideAllSections(); 
          section.classList.remove("hidden"); 
      } else {
          section.classList.add("hidden"); 
      }
  };

  if (vehiclesLink && vehiclesSection) {
      vehiclesLink.addEventListener("click", (event) => {
          event.preventDefault();
          toggleSectionVisibility(vehiclesSection);
      });
  }

  if (closeVehiclesButton && vehiclesSection) {
      closeVehiclesButton.addEventListener("click", () => {
          vehiclesSection.classList.add("hidden");
      });
  }

  if (capabilitiesLink && capabilitiesSection) {
      capabilitiesLink.addEventListener("click", (event) => {
          event.preventDefault();
          toggleSectionVisibility(capabilitiesSection);
      });
  }

  if (jeepLifeLink && jeepLifeSection) {
      jeepLifeLink.addEventListener("click", (event) => {
          event.preventDefault();
          toggleSectionVisibility(jeepLifeSection);
      });
  }

    hamburger.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
