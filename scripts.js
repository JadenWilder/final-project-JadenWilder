document.getElementById("volunteer-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  if (name && email) {
    alert(`Thank you for volunteering, ${name}! We will contact you at ${email}.`);
    document.getElementById("volunteer-form").reset(); // Reset the form after submission
  } else {
    alert("Please fill out all fields.");
  }
});
