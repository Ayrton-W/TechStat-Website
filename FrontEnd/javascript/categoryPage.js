document.addEventListener("DOMContentLoaded", () => {

    // Product Cards
    const productCards = [
        document.querySelector(".v32_4"),
        document.querySelector(".v32_9"),
        document.querySelector(".v32_14"),
        document.querySelector(".v31_28"),
        document.querySelector(".v31_33"),
        document.querySelector(".v31_38"),
        document.querySelector(".v32_83")
    ];

    // Product Card Hover Effect
    productCards.forEach(card => {

        if (!card) return;

        card.style.cursor = "pointer";

        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.03)";
            card.style.transition = "0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });

        card.addEventListener("click", () => {

            const productName =
                card.querySelector("span:last-child").textContent;

            localStorage.setItem(
                "selectedProduct",
                productName
            );

            window.location.href = "productPage.html";
        });

    });

    // Category Buttons

    const categoryButtons = [

        document.querySelector(".threeDPrintingButton"),
        document.querySelector(".electricalButton"),
        document.querySelector(".toolsButton"),
        document.querySelector(".arduinoButton"),
        document.querySelector(".bbcMicrobitButton"),
        document.querySelector(".laserButton"),
        document.querySelector(".solarButton"),
        document.querySelector(".paperAndInkButton"),
        document.querySelector(".filamentButton")
    ];

    categoryButtons.forEach(button => {

        if (!button) return;

        button.style.cursor = "pointer";

        button.addEventListener("click", () => {

            categoryButtons.forEach(btn => {
                btn.style.backgroundColor = "#000";
            });

            button.style.backgroundColor = "#FFD700";

            const text =
                button.textContent.trim();

            localStorage.setItem(
                "selectedCategory",
                text
            );

        });

    });

    // Restore Selected Category

    const selectedCategory =
        localStorage.getItem("selectedCategory");

    categoryButtons.forEach(button => {

        if (
            button &&
            button.textContent.trim() === selectedCategory
        ) {

            button.style.backgroundColor =
                "#FFD700";
        }

    });

    // Home Button

    const homeButton =
        document.querySelector(".homeButton");

    if (homeButton) {

        homeButton.style.cursor = "pointer";

        homeButton.addEventListener("click", () => {

            window.location.href =
                "index.html";

        });

    }

});