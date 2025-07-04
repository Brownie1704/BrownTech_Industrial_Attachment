document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');
  const contactForm = document.getElementById('contactForm');

  // Registration form 
  if (registrationForm) {
    const successMessage = document.getElementById('successMessage');

    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      successMessage.style.display = 'block';
      registrationForm.reset();
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    });
  }

  // Contact form 
  if (contactForm) {
    const responseMessage = document.getElementById('formResponse');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      responseMessage.style.display = 'block';
      contactForm.reset();
      setTimeout(() => {
        responseMessage.style.display = 'none';
      }, 3000);
    });
  }
});
