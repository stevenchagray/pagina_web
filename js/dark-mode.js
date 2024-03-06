// config.js

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const isDarkModeEnabled = document.body.classList.contains("dark-mode");
  const darkModeIcon = document.getElementById("darkModeIcon");

  if (darkModeIcon) {
    darkModeIcon.src = isDarkModeEnabled
      ? "image/dark-mode-dark.png"
      : "image/dark-mode-light.png";
  }

  localStorage.setItem("dark-mode", isDarkModeEnabled);
}

// Verificar si el modo oscuro está activado en localStorage al cargar la página
const isDarkModeSaved = localStorage.getItem("dark-mode");
if (isDarkModeSaved && isDarkModeSaved === "true") {
  document.body.classList.add("dark-mode");

  // Cambiar dinámicamente la fuente de la imagen según el modo oscuro
  const darkModeIcon = document.getElementById("darkModeIcon");
  if (darkModeIcon) {
    darkModeIcon.src = "image/dark-mode-dark.png";
  }
}
