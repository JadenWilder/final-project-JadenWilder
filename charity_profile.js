document.addEventListener("DOMContentLoaded", function() {
    const volunteerBtn = document.getElementById("volunteer-now-btn");
    const volunteerForm = document.getElementById("volunteer-form");

    // Show the volunteer form when the button is clicked
    volunteerBtn.addEventListener("click", function() {
        volunteerForm.style.display = "block"; // Show the form
    });

    // Handle form submission
    volunteerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            alert(`Thank you for volunteering, ${name}! We will contact you at ${email}.`);
            volunteerForm.reset(); // Reset the form after submission
            volunteerForm.style.display = "none"; // Hide the form again
        } else {
            alert("Please fill out all fields.");
        }
    });
});
