document.addEventListener("DOMContentLoaded", () => {

    // Quantity Controls
    const minusBtn = document.querySelector(".quantity button:first-child");
    const plusBtn = document.querySelector(".quantity button:last-child");
    const quantityDisplay = document.querySelector(".quantity span");

    let quantity = parseInt(quantityDisplay.textContent);

    plusBtn.addEventListener("click", () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });

    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    // Product Image Hover Effect
    const productImage = document.querySelector(".divProductDisplay");

    productImage.addEventListener("mouseenter", () => {
        productImage.style.transform = "scale(1.03)";
    });

    productImage.addEventListener("mouseleave", () => {
        productImage.style.transform = "scale(1)";
    });

    // Category Button Highlighting
    const categoryButtons = document.querySelectorAll(
        ".homeButton, .threeDPrintingButton, .electricalButton, .toolsButton, .arduinoButton, .bbcMicrobitButton, .laserButton, .solarButton, .paperAndInkButton, .filamentButton"
    );

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {

            categoryButtons.forEach(btn => {
                btn.classList.remove("active-category");
            });

            button.classList.add("active-category");
        });
    });

    // Add To Cart Functionality
    const addToCartBtn = document.getElementById("addToCartBtn");

    addToCartBtn.addEventListener("click", () => {

        const product = {
            brand: document.getElementById("productBrand").textContent.trim(),
            name: document.getElementById("productName").textContent.trim(),
            price: document.getElementById("productPrice").textContent.trim(),
            quantity: quantity,
            image: "../images/productDisplay.png"
        };

        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];

        const existingProduct = cart.find(
            item => item.name === product.name
        );

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push(product);
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        addToCartBtn.innerHTML =
            "<span class='lblAddToCart'>Added ✓</span>";

        setTimeout(() => {
            addToCartBtn.innerHTML =
                "<span class='lblAddToCart'>Add to cart</span>";
        }, 1500);

        console.log("Updated Cart:", cart);
    });

    // Cart Button
    const cartButton = document.querySelector(".cartButton");

    cartButton.addEventListener("click", () => {
        window.location.href = "shoppingCart.html";
    });

});