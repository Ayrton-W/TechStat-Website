document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const options = document.querySelectorAll(".option");
    const deliveryFee = document.getElementById("deliveryFee");
    const totalPrice = document.getElementById("totalPrice");

    const placeOrderBtn = document.getElementById("placeOrderBtn");
    const backCartBtn = document.getElementById("backCartBtn");

    const cardholderEmail = document.getElementById("cardholderEmail");
    const cardholderName = document.getElementById("cardholderName");
    const cardNumber = document.getElementById("cardNumber");
    const expiryDate = document.getElementById("expiryDate");
    const cvv = document.getElementById("cvv");

    // Prices
    const subtotal = 860;

    let selectedDeliveryFee = 35;

    // Delivery Option Selection
    options.forEach(option => {

        const radio = option.querySelector("input[type='radio']");

        radio.addEventListener("change", () => {

            options.forEach(opt =>
                opt.classList.remove("selected")
            );

            option.classList.add("selected");

            if (radio.id === "meetup") {
                selectedDeliveryFee = 35;
            } else {
                selectedDeliveryFee = 60;
            }

            updateTotals();
        });

    });

    // Update Total
    function updateTotals() {

        const total = subtotal + selectedDeliveryFee;

        deliveryFee.textContent =
            `R${selectedDeliveryFee.toFixed(2)}`;

        totalPrice.textContent =
            `R${total.toFixed(2)}`;
    }

    // Card Number Formatting
    cardNumber.addEventListener("input", e => {

        let value = e.target.value
            .replace(/\D/g, "")
            .substring(0, 16);

        value = value.replace(/(.{4})/g, "$1 ").trim();

        e.target.value = value;
    });

    // Expiry Date Formatting
    expiryDate.addEventListener("input", e => {

        let value = e.target.value
            .replace(/\D/g, "")
            .substring(0, 4);

        if (value.length > 2) {
            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);
        }

        e.target.value = value;
    });

    // CVV Validation
    cvv.addEventListener("input", e => {

        e.target.value = e.target.value
            .replace(/\D/g, "")
            .substring(0, 3);
    });

    // Place Order
    placeOrderBtn.addEventListener("click", () => {

        const email = cardholderEmail.value.trim();
        const name = cardholderName.value.trim();
        const card = cardNumber.value.trim();
        const expiry = expiryDate.value.trim();
        const cvvValue = cvv.value.trim();

        if (
            email === "" ||
            name === "" ||
            card === "" ||
            expiry === "" ||
            cvvValue === ""
        ) {
            alert("Please complete all payment details.");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (card.replace(/\s/g, "").length !== 16) {
            alert("Card number must contain 16 digits.");
            return;
        }

        if (cvvValue.length !== 3) {
            alert("CVV must contain 3 digits.");
            return;
        }

        alert("Order placed successfully!");

        //  To order Confirmed
            window.location.href = "orderConfirmation.html";

    

        // Future backend call goes here
        // fetch(...)
    });

    
    // Back To Cart
    backCartBtn.addEventListener("click", () => {

        window.location.href = "shoppingCart.html";

    });

    // Initial calculation
    updateTotals();

});

