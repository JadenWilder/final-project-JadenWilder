// Get button and form elements
const volunteerBtn = document.getElementById('volunteer-now-btn');
const volunteerForm = document.getElementById('volunteer-form');

// Show the form when the button is clicked
volunteerBtn.addEventListener('click', () => {
  volunteerForm.style.display = 'block';
  volunteerBtn.style.display = 'none';
});

// BONUS: Add extra info on hover (interactivity via DOM)
const description = document.querySelector('.charity-profile p');

description.addEventListener('mouseenter', () => {
  if (!document.getElementById('extra-info')) {
    const extraInfo = document.createElement('p');
    extraInfo.id = 'extra-info';
    extraInfo.textContent = "Fun Fact: The Red Cross responds to over 60,000 disasters annually!";
    extraInfo.style.color = "#555";
    description.parentElement.appendChild(extraInfo);
  }
});

description.addEventListener('mouseleave', () => {
  const extraInfo = document.getElementById('extra-info');
  if (extraInfo) {
    extraInfo.remove();
  }
});
