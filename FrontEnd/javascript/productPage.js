// productPage.js

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Add To Cart Functionality
    // ==========================

    const addToCartBtn = document.getElementById("addToCartBtn");

    if (addToCartBtn) {

        addToCartBtn.addEventListener("click", () => {

            const product = {
                brand: document.getElementById("productBrand").textContent.trim(),
                name: document.getElementById("productName").textContent.trim(),
                price: document.getElementById("productPrice").textContent.trim()
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(product);

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            const label =
                document.querySelector(".lblAddToCart");

            label.textContent = "Added ✔";

            setTimeout(() => {
                label.textContent = "Add to cart";
            }, 2000);

            alert("Product added to cart!");
        });
    }

    // ==========================
    // Product Image Hover Effect
    // ==========================

    const productImage =
        document.getElementById("productImage");

    if (productImage) {

        productImage.addEventListener("mouseenter", () => {
            productImage.style.transform = "scale(1.03)";
        });

        productImage.addEventListener("mouseleave", () => {
            productImage.style.transform = "scale(1)";
        });
    }

});