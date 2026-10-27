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