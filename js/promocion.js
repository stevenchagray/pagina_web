const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const interval = 3000; // Intervalo de tiempo en milisegundos (3 segundos en este ejemplo)
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * 100 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
}

// Espera a que todas las imágenes estén cargadas antes de iniciar el carrusel.
window.addEventListener("load", function () {
  updateCarousel(); // Asegurarse de que el carrusel comience desde la primera imagen.
  setInterval(nextSlide, interval);
});
