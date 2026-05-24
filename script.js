document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Mensaje enviado correctamente. Esta es una simulación de FreestyleNews.');
      contactForm.reset();
    });
  }
});
