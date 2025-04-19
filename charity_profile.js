document.addEventListener("DOMContentLoaded", function() {
    const volunteerBtn = document.getElementById("volunteer-now-btn");
    const volunteerForm = document.getElementById("volunteer-form");
    const charityDetails = document.querySelector(".info-box");

    // Show the volunteer form when the button is clicked
    volunteerBtn.addEventListener("click", function() {
        volunteerForm.style.display = "block"; // Show the form
    });

    // Handle form submission
    volunteerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
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

    // Add hover effect for charity details
    charityDetails.addEventListener("mouseover", function() {
        this.textContent = "We help the community by providing resources!";
    });

    charityDetails.addEventListener("mouseout", function() {
        this.textContent = "Hover over me for more info!";
    });
});
