const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    // Show error styles and message
    emailInput.classList.add("error");
    errorMsg.style.display = "block";
  } else {
    // Clear error styles and message
    emailInput.classList.remove("error");
    errorMsg.style.display = "none";

    // Navigate to success page with email in query
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  }
});
