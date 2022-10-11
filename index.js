document.addEventListener("DOMContentLoaded", () => {
    /**
     * Image selector
     */

    const imageContainers = document.querySelectorAll(".images-container");

    imageContainers.forEach((container) => {
        const images = container.querySelectorAll(".sub-image");
        const view = container.querySelector(".main-image");

        images.forEach((image) => {
            image.addEventListener("click", () => {
                const style = image.currentStyle || window.getComputedStyle(image, false);
                const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
                view.style.backgroundImage = `url(${url})`;
            });
        });
    });

    /**
     * Floorplan
     */

    const floorplanBtn = document.querySelector(".floorplan-btn");
    const floorplanPopup = document.querySelector(".floorplan-popup");
    const floorplanExit = floorplanPopup.querySelector(".exit");

    floorplanBtn.addEventListener("click", () => {
        floorplanPopup.style.display = "flex";
    });

    floorplanExit.addEventListener("click", () => {
        floorplanPopup.style.display = "none";
    });
});