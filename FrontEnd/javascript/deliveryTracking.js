document.addEventListener("DOMContentLoaded", () => {

    // ===== Tab Switching =====

    const tabs = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            tabs.forEach(btn => {
                btn.classList.remove("active");
            });

            tab.classList.add("active");
        });
    });

    // ===== Order Number Copy =====

    const orderNumber =
        document.getElementById("orderNumber");

    orderNumber.style.cursor = "pointer";

    orderNumber.title =
        "Click to copy order number";

    orderNumber.addEventListener("click", () => {

        navigator.clipboard.writeText(
            orderNumber.textContent
        );

        alert("Order number copied!");
    });

    // ===== Status Badge Styling =====

    const statusBadge =
        document.getElementById("statusBadge");

    const status =
        statusBadge.textContent.trim();

    switch (status) {

        case "Order Confirmed":
            statusBadge.style.background =
                "#FFD700";
            break;

        case "Item Packaged":
            statusBadge.style.background =
                "#FFCC00";
            break;

        case "In Transit":
            statusBadge.style.background =
                "#FFD700";
            statusBadge.style.color =
                "#000";
            break;

        case "Out for Delivery":
            statusBadge.style.background =
                "#FFA500";
            statusBadge.style.color =
                "#000";
            break;

        case "Delivered":
            statusBadge.style.background =
                "#28A745";
            statusBadge.style.color =
                "#FFF";
            break;
    }

    // ===== Current Tracking Step =====

    const currentStep =
        document.querySelector(
            ".timeline-item.active h4"
        );

    if (currentStep) {

        console.log(
            "Current Status:",
            currentStep.textContent
        );
    }

});