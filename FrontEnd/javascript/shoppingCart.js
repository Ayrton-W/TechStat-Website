document.addEventListener("DOMContentLoaded", () => {
    const cartCards = document.querySelectorAll(".cart-card");

    cartCards.forEach(card => {
        const buttons = card.querySelectorAll(".quantity button");
        const quantitySpan = card.querySelector(".quantity span");

        // Store original price
        const priceElement = card.querySelector(".price");
        const unitPrice = parseInt(
            priceElement.textContent.replace(/R| /g, "")
        );

        // Set initial data attribute
        card.dataset.unitPrice = unitPrice;

        buttons[0].addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);

            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;

                updateCardPrice(card, quantity);
                updateSummary();
            }
        });

        buttons[1].addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);

            quantity++;
            quantitySpan.textContent = quantity;

            updateCardPrice(card, quantity);
            updateSummary();
        });

        updateCardPrice(card, parseInt(quantitySpan.textContent));
    });

    updateSummary();
});

/* Update individual item total */
function updateCardPrice(card, quantity) {
    const unitPrice = Number(card.dataset.unitPrice);
    const priceElement = card.querySelector(".price");

    const totalPrice = unitPrice * quantity;

    priceElement.textContent =
        "R" + totalPrice.toLocaleString("en-ZA");
}

/* Update cart summary */
function updateSummary() {
    const cards = document.querySelectorAll(".cart-card");

    let subtotal = 0;

    cards.forEach(card => {
        const priceText = card.querySelector(".price").textContent;
        subtotal += Number(priceText.replace(/R|,/g, ""));
    });

    const summaryValues = document.querySelectorAll(
        ".summary-row span:last-child"
    );

    summaryValues[0].textContent =
        "R" + subtotal.toLocaleString("en-ZA");

    summaryValues[1].textContent =
        "R" + subtotal.toLocaleString("en-ZA");
}