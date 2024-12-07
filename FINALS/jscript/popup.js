document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.getElementById("close-btn");
    const zoomableImages = document.querySelectorAll(".zoomable");

    zoomableImages.forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = img.src;
        });
    });

   
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});