// Reveal login with Ctrl + Alt + A
    document.addEventListener("keydown", function(e) {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
        window.location.href = "../html/adminLogin.html"; // Redirect to admin login page
        document.getElementById("loginContainer").style.display = "flex";
      }
    });

    // Hide login when Cancel is clicked
    function hideLogin() {
      document.getElementById("loginContainer").style.display = "none";
    }

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
