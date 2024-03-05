const $container = document.querySelector(".container-1");

setInterval(() => {
  const $last = $container.firstElementChild;
  $last.remove();
  $container.appendChild($last);
}, 1000);
