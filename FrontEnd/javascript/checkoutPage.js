document.addEventListener("DOMContentLoaded", () => {

    const subtotal = 860;

    const meetupRadio = document.getElementById("meetup");
    const pickupRadio = document.getElementById("pickup");

    const deliveryFee = document.getElementById("deliveryFee");
    const totalPrice = document.getElementById("totalPrice");

    function updateTotal() {

        let fee = 35;

        if (pickupRadio.checked) {
            fee = 60;
        }

        deliveryFee.textContent = `R${fee.toFixed(2)}`;
        totalPrice.textContent = `R${(subtotal + fee).toFixed(2)}`;
    }

    meetupRadio.addEventListener("change", updateTotal);
    pickupRadio.addEventListener("change", updateTotal);

    updateTotal();

    document.getElementById("placeOrderBtn")
        .addEventListener("click", (e) => {

        e.preventDefault();

        const name = document.getElementById("cardholderName").value;
        const card = document.getElementById("cardNumber").value;
        const expiry = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;

        if (
            name.trim() === "" ||
            card.trim() === "" ||
            expiry.trim() === "" ||
            cvv.trim() === ""
        ) {
            alert("Please complete all payment details.");
            return;
        }

        if (card.replace(/\s/g, "").length < 16) {
            alert("Card number must contain 16 digits.");
            return;
        }

        if (cvv.length < 3) {
            alert("Invalid CVV.");
            return;
        }

        alert("Order placed successfully!");

        // Redirect to confirmation page
        window.location.href = "orderConfirmation.html";
    });

    document.getElementById("backCartBtn")
        .addEventListener("click", () => {

        window.location.href = "cart.html";

    });
});