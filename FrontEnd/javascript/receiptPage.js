document.addEventListener("DOMContentLoaded", () => {

    // Generate current date and time

    const now = new Date();

    document.getElementById("receiptDate").textContent =
        now.toLocaleDateString("en-ZA", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

    document.getElementById("receiptTime").textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    // Print Receipt

    document.getElementById("printBtn").addEventListener("click", () => {
        window.print();
    });

    // Download PDF

    document.getElementById("downloadBtn").addEventListener("click", async () => {
        const receiptCard = document.querySelector(".receipt-card");
        const receiptNumber =
            document.getElementById("receiptNumber").textContent.trim();

        if (!receiptCard) {
            console.error("Cannot download receipt PDF: receipt card was not found.");
            alert("Unable to download the receipt PDF.");
            return;
        }

        if (typeof html2pdf !== "function") {
            console.error("Cannot download receipt PDF: PDF library did not load.");
            alert("The PDF generator could not be loaded. Please refresh and try again.");
            return;
        }

        try {
            await html2pdf()
                .set({
                    filename: `TechStat-Receipt-${receiptNumber}.pdf`,
                    margin: 10,
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
                })
                .from(receiptCard)
                .save();
        } catch (error) {
            console.error("Failed to generate receipt PDF:", error);
            alert("Unable to download the receipt PDF. Please try again.");
        }
    });

    // Email Receipt

    document.getElementById("emailBtn").addEventListener("click", () => {

        const receiptNumber =
            document.getElementById("receiptNumber").textContent;

        const subject =
            `TechStat Receipt - ${receiptNumber}`;

        const body =
            `Thank you for shopping with TechStat.%0D%0A%0D%0AReceipt Number: ${receiptNumber}`;

        window.location.href =
            `mailto:?subject=${subject}&body=${body}`;
    });

    // Copy Receipt Number

    document.getElementById("copyReceiptBtn").addEventListener("click", () => {

        const receiptNumber =
            document.getElementById("receiptNumber").textContent;

        navigator.clipboard.writeText(receiptNumber);

        alert("Receipt Number Copied!");
    });

});