document.addEventListener("DOMContentLoaded", function() {
  const volunteerBtn = document.getElementById("volunteer-now-btn");
  const volunteerForm = document.getElementById("volunteer-form");

  if (volunteerBtn && volunteerForm) {
    volunteerBtn.addEventListener("click", function() {
      volunteerForm.style.display = "block";
    });

    volunteerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      if (name && email) {
        alert(`Thank you for volunteering, ${name}! We will contact you at ${email}.`);
        volunteerForm.reset();
        volunteerForm.style.display = "none";
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
});
