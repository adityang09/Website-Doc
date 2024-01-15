$(document).ready(function () {
  $('#contactForm').submit(function (event) {
    const name = $('#name').val();
    const email = $('#email').val();

    if (name === '' || email === '') {
      alert('Please fill out all fields in the form.');
      event.preventDefault();
    }
  });
});
