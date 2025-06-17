const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMsg.style.display = "block";
    emailInput.classList.add("invalid");
  } else {
    errorMsg.style.display = "none";
    emailInput.classList.remove("invalid");
    // Redirect to success page with email as query param
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  }
});
