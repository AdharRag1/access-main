// Toggle widget menu visibility
const menuButton = document.querySelector('.asw-menu-btn');
const menu = document.querySelector('.asw-menu');

menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Handle profile selection
const profileButtons = document.querySelectorAll('.profile-btn');

profileButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove 'selected' from all buttons
    profileButtons.forEach((btn) => btn.classList.remove('selected'));

    // Add 'selected' to the clicked button
    btn.classList.add('selected');

    // Apply the corresponding profile
    const profile = btn.getAttribute('data-profile');
    applyProfile(profile);
  });
});

// Function to handle different profiles
function applyProfile(profile) {
  switch (profile) {
    case 'blind':
      alert('Blind profile activated: Screen reader settings applied.');
      break;
    case 'color-blind':
      alert('Color Blind profile activated: High contrast mode applied.');
      break;
    case 'adhd':
      alert('ADHD profile activated: Focus mode applied.');
      break;
    case 'dyslexia':
      alert('Dyslexia profile activated: Dyslexia-friendly font applied.');
      break;
    default:
      console.log('Unknown profile:', profile);
  }
}
