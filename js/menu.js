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
  const applyFilterBtn = document.getElementById("applyFilter");
  const items = document.querySelectorAll(".cj-medicos > div");

  applyFilterBtn.addEventListener("click", function () {
    const filterValue = filterSelect.value;

    items.forEach((item) => {
      item.style.display = "none";

      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.style.display = "block";
      }
    });
  });
});

//OBTENER MES PARA PONER A EL DIV

function obtenerMesActual() {
  // Crear un array con los nombres de los meses
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Obtener el número del mes (0-11)
  const numeroMes = fechaActual.getMonth();

  // Obtener el nombre del mes usando el array
  const nombreMes = meses[numeroMes];

  return nombreMes;
}

// Llamar a la función y mostrar el mes en el elemento con id "mes"
document.getElementById("mes").textContent = obtenerMesActual();

//OBTENER NOMBRE DEL DIA DE LA SEMANA

//OBTNER AÑO

// Obtener la fecha actual
let fechaActual = new Date();

// PONER COLOR SEGUN LA FECHA

// Fecha 1: Sabado 12
const fecha1 = new Date("2024-03-12");
if (fechaActual > fecha1) {
  document.getElementById("c1-fecha1").classList.add("fecha-pasada");
} else {
  document.getElementById("c1-fecha1").classList.add("fecha-futura");
}

// Fecha 2: Sabado 28
const fecha2 = new Date("2024-03-28");
if (fechaActual > fecha2) {
  document.getElementById("c1-fecha2").classList.add("fecha-pasada");
} else {
  document.getElementById("c1-fecha2").classList.add("fecha-futura");
}

let c1fecha1 = fecha1.getDate() + 1;
let c1fecha2 = fecha2.getDate() + 1;

// Obtener el nombre del día de la semana
function obtenerDiaSemana(numeroDiaMes) {
  // Crear una instancia de la fecha actual
  const fecha = new Date();

  // Establecer el día del mes según el número de día proporcionado
  fecha.setDate(numeroDiaMes);

  // Obtener el nombre del día de la semana
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const diaSemana = diasSemana[fecha.getDay()];

  return diaSemana;
}

document.getElementById("c1-fecha1").innerHTML =
  obtenerDiaSemana(c1fecha1) + " " + c1fecha1 + "<br>10 AM 4 PM";

document.getElementById("c1-fecha2").innerHTML =
  obtenerDiaSemana(c1fecha2) + " " + c1fecha2 + "<br>10 AM 4 PM";
