document.addEventListener("DOMContentLoaded", function () {
  // Obtén la URL actual
  var url = window.location.href;

  // Obtén todos los enlaces del menú
  var enlaces = document.querySelectorAll("nav .menu");

  // Itera sobre los enlaces y compara la URL actual con la URL del enlace
  enlaces.forEach(function (enlace) {
    if (enlace.href === url) {
      // Agrega una clase para resaltar la opción seleccionada
      enlace.classList.add("seleccionado");
    }
  });
});

// Función para resaltar la opción seleccionada
function seleccionarOpcion(enlace) {
  // Elimina la clase "seleccionado" de todos los enlaces
  var enlaces = document.querySelectorAll("nav .menu");
  enlaces.forEach(function (e) {
    e.classList.remove("seleccionado");
  });

  // Agrega la clase "seleccionado" solo al enlace actual
  enlace.classList.add("seleccionado");
}

document.addEventListener("DOMContentLoaded", function () {
  const filterSelect = document.getElementById("filterSelect");
  const items = document.querySelectorAll(".cj-medicos > div");

  // Establecer el valor predeterminado al cargar la página
  filterSelect.value = "med_general";

  // Función para aplicar el filtro
  function applyFilter(filterValue) {
    items.forEach((item) => {
      item.style.display = "none";

      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.style.display = "block";
      }
    });
  }

  // Aplicar el filtro al iniciar la página
  applyFilter(filterSelect.value);

  filterSelect.addEventListener("change", function () {
    applyFilter(filterSelect.value);
  });
});

document.getElementById("medigeneral").onclick = function () {
  window.location.href = "MedicinaGeneral.html";
}; 