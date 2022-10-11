document.addEventListener("DOMContentLoaded", () => {
    /**
     * Image selector
     */

    const imageContainers = document.querySelectorAll(".images-container");

    imageContainers.forEach((container) => {
        const images = container.querySelectorAll(".sub-image");
        const view = container.querySelector(".main-image");

        images.forEach((image) => {
            const style = image.currentStyle || window.getComputedStyle(image, false);
            const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            
            shownImage.forEach((img) => {
                view.style.backgroundImage = `url(${url})`;
            });
        });
    });

    /**
     * Popup
     */
});