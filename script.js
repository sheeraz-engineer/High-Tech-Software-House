document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple validation example
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      response.style.color = "red";
      response.textContent = "Please fill in all fields.";
      return;
    }

    // Simulated success response
    response.style.color = "green";
    response.textContent = "Thank you! Your message has been sent.";

    form.reset();
  });
});
