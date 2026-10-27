    // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".loginBox form");
  const usernameInput = form.querySelector("input[type='text']");
  const passwordInput = form.querySelector("input[type='password']");
  const cancelBtn = form.querySelector(".cancel-btn");

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page refresh

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // For now, just log values to console
    console.log("Username:", username);
    console.log("Password:", password);

    // Example static validation
    if (username === "admin" && password === "123321") {
      alert("Login successful!");
      // Redirect to dashboard page
      window.location.href = "../html/adminDashboard.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });

  // Handle cancel button
  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    usernameInput.value = "";
    passwordInput.value = "";
    alert("Login cancelled.");
    window.location.href = "../html/index.html"; // Redirect to home page
  });
});
