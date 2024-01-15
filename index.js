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

// Add this to your index.js file
$(document).ready(function () {
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    const target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });
});

// Add this to your index.js file
$(document).ready(function () {
  // Highlight active section in navigation
  $(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();

    // Adjust the offset based on your layout
    $('section').each(function () {
      const sectionTop = $(this).offset().top - 50;
      const sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = $(this).attr('id');
        $('.topnav a').removeClass('active');
        $(`.topnav a[href="#${sectionId}"]`).addClass('active');
      }
    });
  });
});
