$(document).ready(function () {
  const darkModePreference = localStorage.getItem('darkMode');

  if (darkModePreference === 'true') {
    enableDarkMode();
  }

  $('#darkModeToggle').click(function () {
    toggleDarkMode();
    toggleFooterTextColor();
  });
});

function toggleDarkMode() {
  $('body').toggleClass('dark-mode');

  const darkModeEnabled = $('body').hasClass('dark-mode');
  localStorage.setItem('darkMode', darkModeEnabled);
}

function enableDarkMode() {
  $('body').addClass('dark-mode');
}

function toggleFooterTextColor() {
  const footerText = $('.footer p');
  footerText.toggleClass('white-text');
}
// $(document).ready(function() {
//   function toggleFooterColor() {
//     const text = $('.hero .heads p');
//     text.toggleClass('-white-text');
//   }

//   // You can now call toggleFooterColor function or attach it to an event.
//   // Example: $('.some-button').click(toggleFooterColor);
// });



