const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    // Show error
    errorMsg.style.display = "block";
    emailInput.classList.add("error");
  } else {
    // Hide error
    errorMsg.style.display = "none";
    emailInput.classList.remove("error");

    // Navigate to success page with email
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  }
});
