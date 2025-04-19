// Get elements
const volunteerBtn = document.getElementById('volunteer-now-btn');
const volunteerForm = document.getElementById('volunteer-form');
const description = document.querySelector('.charity-profile p');

// When "Volunteer Now" is clicked, show the form
volunteerBtn.addEventListener('click', () => {
  volunteerForm.style.display = 'block';
  volunteerBtn.style.display = 'none'; // Hide the button after clicked
});

// BONUS: Add extra info when user hovers over the description
description.addEventListener('mouseenter', () => {
  const extraInfo = document.createElement('p');
  extraInfo.id = 'extra-info';
  extraInfo.textContent = "Fun Fact: The Red Cross responds to over 60,000 disasters every year!";
  description.parentElement.appendChild(extraInfo);
});

description.addEventListener('mouseleave', () => {
  const extraInfo = document.getElementById('extra-info');
  if (extraInfo) {
    extraInfo.remove();
  }
});
