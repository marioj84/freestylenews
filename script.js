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

      const rawMessage = `Hola, equipo de FreestyleNews.

Quisiera solicitar la publicación de un evento o noticia en la plataforma.

Datos de la solicitud:

Nombre del evento o noticia: ${eventName}
Organización / comunidad: ${organization}
Correo de contacto: ${contactEmail}

Información para publicar:
${eventInfo}

Mensaje adicional:
${publisherMessage || 'Sin mensaje adicional.'}

Quedo atento/a para coordinar la publicación.
Muchas gracias.`;

      const encodedMessage = encodeURIComponent(rawMessage);
      const whatsappUrl = `https://wa.me/56966032734?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }
});
