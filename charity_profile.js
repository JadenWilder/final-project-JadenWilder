document.getElementById("volunteer-button").addEventListener("click", function() {
  // Create a form dynamically
  const formDiv = document.createElement("div");
  formDiv.innerHTML = `
    <form id="volunteer-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Submit</button>
    </form>
  `;
  document.querySelector(".charity-profile").appendChild(formDiv);

  // Add event listener to the new form
  document.getElementById("volunteer-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
      alert(`Thank you for volunteering, ${name}! We will contact you at ${email}.`);
      formDiv.remove(); // Remove the form after submission
    } else {
      alert("Please fill out all fields.");
    }
  });
});

