document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("volunteer-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      if (name && email) {
        alert(`Thank you for volunteering, ${name}! We will contact you at ${email}.`);
        form.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
});
