// Select the button and the form from the page
const volunteerBtn = document.getElementById('volunteer-now-btn');
const volunteerForm = document.getElementById('volunteer-form');

// When the button is clicked...
volunteerBtn.addEventListener('click', () => {
  // Show the form
  volunteerForm.style.display = 'block';

  // Hide the button
  volunteerBtn.style.display = 'none';
});
