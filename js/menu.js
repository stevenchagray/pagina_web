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

