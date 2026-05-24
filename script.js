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

      const rawMessage = `Hola, equipo de FreestyleNews.\n\nQuisiera solicitar la publicación de un evento o noticia en la plataforma.\n\nDatos de la solicitud:\n\nNombre del evento o noticia: ${eventName}\nOrganización / comunidad: ${organization}\nCorreo de contacto: ${contactEmail}\n\nInformación para publicar:\n${eventInfo}\n\nMensaje adicional:\n${publisherMessage || 'Sin mensaje adicional.'}\n\nQuedo atento/a para coordinar la publicación.\nMuchas gracias.`;

      const encodedMessage = encodeURIComponent(rawMessage);
      const whatsappUrl = `https://wa.me/56966032734?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  if (typeof freestyleData !== 'undefined') {
    renderNews();
    renderResults();
    renderStats();
    renderWorldAgenda();
    renderRegionalAgenda();
  }
});

function renderNews() {
  const container = document.getElementById('newsContainer');
  if (!container) return;

  container.innerHTML = freestyleData.noticias.map((news, index) => `
    <article class="${index === 0 ? 'main-story' : 'side-story'} story-card ${index === 2 ? 'reverse' : ''}">
      <div class="story-image ${news.imagenClase}"></div>
      <div class="story-content">
        <span>${news.fuente}</span>
        <h3>${news.titulo}</h3>
        <p>${news.descripcion}</p>
        <a href="${news.url}" target="_blank">Ver más</a>
      </div>
    </article>
  `).join('');
}

function renderResults() {
  const container = document.getElementById('resultsContainer');
  if (!container) return;

  container.innerHTML = freestyleData.resultados.map(item => `
    <div>
      <strong>${item.categoria}</strong>
      <span>${item.detalle}</span>
      <strong><a href="${item.url}" target="_blank">${item.accion}</a></strong>
    </div>
  `).join('');
}

function renderStats() {
  const container = document.getElementById('statsContainer');
  if (!container) return;

  container.innerHTML = freestyleData.estadisticas.map(stat => `
    <div>
      <span>${stat.simbolo}</span>
      <strong>${stat.titulo}</strong>
      <small>${stat.descripcion}</small>
    </div>
  `).join('');
}

function renderWorldAgenda() {
  const container = document.getElementById('worldAgendaContainer');
  if (!container) return;

  container.innerHTML = freestyleData.agendaMundial.map(event => `
    <article>
      <span>${event.etiqueta}</span>
      <h3>${event.titulo}</h3>
      <p>${event.descripcion}</p>
    </article>
  `).join('');
}

function renderRegionalAgenda() {
  const container = document.getElementById('regionalAgendaContainer');
  if (!container) return;

  container.innerHTML = freestyleData.agendaRegional.map(event => `
    <article>
      <span>${event.fecha}</span>
      <h3>${event.titulo}</h3>
      <p>${event.descripcion}</p>
    </article>
  `).join('');
}
