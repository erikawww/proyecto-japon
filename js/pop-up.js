$(document).ready(function () {
  // Abrir y cerrar responsive nav bar
  $(".burguer-menu").click(function () {
    $(".nav-links").toggleClass("open");
    $(".burguer-menu").toggleClass("open");
  });

  // Cerrar Burguer menu
  $(".nav-item").click(function () {
    $(".nav-links").toggleClass("open");
    $(".burguer-menu").toggleClass("open");
  });
});
const carritoAbrir = document.getElementById("boton-carrito");
const carritoCerrar = document.getElementById("carritoCerrar");

const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

carritoAbrir.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});
carritoCerrar.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});
modalCarrito.addEventListener("click", (e) => {
  e.stopPropagation();
});
contenedorModal.addEventListener("click", () => {
  carritoCerrar.click();
});
