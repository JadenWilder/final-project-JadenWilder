document.addEventListener('DOMContentLoaded', () => {
  // Select the button and the form from the page
  const volunteerBtn = document.getElementById('volunteer-now-btn');
  const volunteerForm = document.getElementById('volunteer-form');

  // Make sure both elements exist before adding the event
  if (volunteerBtn && volunteerForm) {
    volunteerBtn.addEventListener('click', () => {
      // Show the form
      volunteerForm.style.display = 'block';

      // Hide the button
      volunteerBtn.style.display = 'none';
    });
  }
});
