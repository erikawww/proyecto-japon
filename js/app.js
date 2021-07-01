// Carrito de compras + variables carrito

let carritoDeCompras = [];

const containerProducto = document.querySelector(".container");
const contenedorCarrito = document.querySelector("#carrito-contenedor");
const contadorCarrito = document.querySelector("#contadorCarrito");

/////////////// Agregar productos Hombre \\\\\\\\\\\\\\\\\\\

mostrarProductos(stockTotal);

function mostrarProductos(lista) {
  lista.forEach((x) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML += `<img id="${x.nombre}" src="${x.img}">
                        <h3>${x.tipo}</h3>
                        <p class="card-parrafo">$${x.precio}</p>
                        <a id=${x.id} class="card-btn">Agregar</a>`;

    containerProducto.appendChild(div);

    let botonCta = document.getElementById(`${x.id}`);

    botonCta.addEventListener("click", () => {
      agregarAlCarrito(x.id);
    });
  });
}

function agregarAlCarrito(id) {
  let validar = carritoDeCompras.some((x) => x.id == id);
  if (validar) {
    let count = document.getElementById(`cantidad${id}`);

    carritoDeCompras.map((x) => {
      if (x.id == id) {
        count.innerText = `${x.cantidad++}`;
      }
      actualizarContador();
    });
  } else {
    let productoAgregar = stockTotal.filter((el) => el.id == id)[0];
    carritoDeCompras.push(productoAgregar);
    actualizarContador();

    let div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML += `<h3>${productoAgregar.tipo}</h3>
                      <p>$${productoAgregar.precio}</p>
                      <p id=cantidad${productoAgregar.id}>${productoAgregar.cantidad}</p>
                      <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash"></i></button>`;

    contenedorCarrito.appendChild(div);

    let count = document.getElementById(`cantidad${id}`);

    // Eliminar producto de carrito
    let botonEliminar = document.getElementById(
      `eliminar${productoAgregar.id}`
    );

    botonEliminar.addEventListener("click", () => {
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(
        (elemento) => elemento.id != productoAgregar.id
      );
      actualizarContador();
    });
  }
}
// Actualizar contador del carrito

function actualizarContador() {
  contadorCarrito.innerText = carritoDeCompras.length;
  localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
  precioTotal.innerText = carritoDeCompras.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );
}

// Revisar LocalStorage

function revisarLocal() {
  let carritoLocal = JSON.parse(localStorage.getItem("carritoDeCompras"));
  if (carritoLocal) {
    carritoLocal.forEach((elemento) => agregarAlCarrito(elemento.id));
  }
}

revisarLocal();
