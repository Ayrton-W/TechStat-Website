document.addEventListener("DOMContentLoaded", () => {

    // Generate unique order number

    const orderNumberElement =
        document.getElementById("orderNumber");

    let orderNumber = localStorage.getItem("orderNumber");

    if (!orderNumber) {

        orderNumber =
            "ORDER-" +
            Math.floor(
                100000 + Math.random() * 900000
            );

        localStorage.setItem(
            "orderNumber",
            orderNumber
        );
    }

    orderNumberElement.textContent =
        "#" + orderNumber;

    // Copy Order Number

    orderNumberElement.addEventListener("click", () => {

        navigator.clipboard.writeText(orderNumber);

        alert("Order number copied!");
    });

    // View Orders

    document
        .getElementById("viewOrdersBtn")
        .addEventListener("click", () => {

            window.location.href =
                "deliveryTracking.html";

        });

    // Continue Shopping

    document
        .getElementById("viewReceiptBtn")
        .addEventListener("click", () => {

            window.location.href =
                "receiptPage.html";

        });

    // Success Animation

    const successIcon =
        document.querySelector(".success-icon");

    successIcon.animate(
        [
            {
                transform: "scale(0)"
            },
            {
                transform: "scale(1.2)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 700,
            easing: "ease-out"
        }
    );

});