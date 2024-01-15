// index.js

// Wait for the DOM to be ready before executing any code
$(document).ready(function () {
  // Check if the user has a preference for dark mode stored in local storage
  const darkModePreference = localStorage.getItem('darkMode');

  // Apply dark mode if the preference is true
  if (darkModePreference === 'true') {
    enableDarkMode();
  }

  // Toggle dark mode on button click
  $('#darkModeToggle').click(function () {
    toggleDarkMode();
  });
});

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle the dark mode class on the body
  $('body').toggleClass('dark-mode');

  // Check if the dark mode is enabled and save the preference in local storage
  const darkModeEnabled = $('body').hasClass('dark-mode');
  localStorage.setItem('darkMode', darkModeEnabled);
}

// Function to enable dark mode
function enableDarkMode() {
  // Add the dark mode class to the body
  $('body').addClass('dark-mode');
}

