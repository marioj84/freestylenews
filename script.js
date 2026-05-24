document.addEventListener('DOMContentLoaded', () => {
  const publishForm = document.getElementById('publishForm');

  if (publishForm) {
    publishForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const eventName = document.getElementById('eventName').value.trim();
      const organization = document.getElementById('organization').value.trim();
      const contactEmail = document.getElementById('contactEmail').value.trim();
      const eventInfo = document.getElementById('eventInfo').value.trim();
      const publisherMessage = document.getElementById('publisherMessage').value.trim();

      const message = `Hola, soy parte de ${organization}. Quiero publicar un evento en FreestyleNews.%0A%0ANombre del evento: ${eventName}%0ACorreo de contacto: ${contactEmail}%0A%0AInformación del evento:%0A${eventInfo}%0A%0AMensaje adicional:%0A${publisherMessage}`;

      const whatsappUrl = `https://wa.me/56966032734?text=${message}`;

      window.open(whatsappUrl, '_blank');
    });
  }
});
