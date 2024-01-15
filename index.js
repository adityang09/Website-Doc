$(document).ready(function () {
  const darkModePreference = localStorage.getItem('darkMode');

  if (darkModePreference === 'true') {
    enableDarkMode();
  }

  $('#darkModeToggle').click(function () {
    toggleDarkMode();
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

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    const target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });
});
