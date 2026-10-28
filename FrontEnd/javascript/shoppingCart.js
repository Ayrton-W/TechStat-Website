document.addEventListener("DOMContentLoaded", () => {

    const cartCards = document.querySelectorAll(".cart-card");

    function getPrice(priceText) {
        return Number(
            priceText.replace("R", "").replace(/\s/g, "")
        );
    }

    function updateTotals() {
        let subtotal = 0;

        cartCards.forEach(card => {

            const quantitySpan = card.querySelector(".quantity span");
            const priceElement = card.querySelector(".price");

            const quantity = parseInt(quantitySpan.textContent);

            if (!priceElement.dataset.originalPrice) {
                priceElement.dataset.originalPrice =
                    getPrice(priceElement.textContent);
            }

            const originalPrice = Number(
                priceElement.dataset.originalPrice
            );

            const itemTotal = originalPrice * quantity;

            priceElement.textContent =
                "R" + itemTotal.toLocaleString("en-ZA");

            subtotal += itemTotal;
        });

        const subtotalElement =
            document.querySelector(".summary-row span:last-child");

        const totalElement =
            document.querySelector(".total span:last-child");

        if (subtotalElement) {
            subtotalElement.textContent =
                "R" + subtotal.toLocaleString("en-ZA");
        }

        if (totalElement) {
            totalElement.textContent =
                "R" + subtotal.toLocaleString("en-ZA");
        }
    }

    cartCards.forEach(card => {

        const buttons =
            card.querySelectorAll(".quantity button");

        const minusBtn = buttons[0];
        const plusBtn = buttons[1];

        const quantitySpan =
            card.querySelector(".quantity span");

        plusBtn.addEventListener("click", () => {

            let quantity =
                parseInt(quantitySpan.textContent);

            quantity++;

            quantitySpan.textContent = quantity;

            updateTotals();
        });

        minusBtn.addEventListener("click", () => {

            let quantity =
                parseInt(quantitySpan.textContent);

            if (quantity > 1) {
                quantity--;

                quantitySpan.textContent = quantity;

                updateTotals();
            }
        });

    });

    const checkoutBtn =
        document.querySelector(".checkout-btn");

    if (checkoutBtn) {

        checkoutBtn.addEventListener("click", () => {

            alert("Redirecting to checkout...");

            // Change this to your checkout page later
            window.location.href = "checkoutPage.html";

        });

    }

    const continueBtn =
        document.querySelector(".continue-btn");

    if (continueBtn) {

        continueBtn.addEventListener("click", () => {

            // Change to your marketplace page
            window.location.href = "categoryPage.html";

        });

    }

    updateTotals();

});