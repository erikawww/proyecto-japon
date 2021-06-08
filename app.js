// // Navbar mobile
// const burguerMenu = document.querySelector(".burguer-menu");
// const navLinks = document. querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links .nav-item");
// // const cabe = document.querySelector(".cabecera")

// burguerMenu.addEventListener("click", () =>{
//     navLinks.classList.toggle("open");
//     burguerMenu.classList.toggle("toggle");
//     // cabe.classList.toggle("blue")
    
//     });

// // pop up cards

// var popupViews = document.querySelectorAll('.popup-view');
// var popupBtns = document.querySelectorAll('.card-btn');
// var closeBtns = document.querySelectorAll('.close-btn');

// // Abrir
// var popup = function(popupClick){
//     popupViews[popupClick].classList.add('active');
// }
// popupBtns.forEach((popupBtn, i) =>{
//     popupBtn.addEventListener("click",() =>{
//         popup(i)
//     });
// });
// // Cerrar
// closeBtns.forEach((closeBtn)=> {
//     closeBtn.addEventListener("click", () => {
//         popupViews.forEach((popupView) => {
//             popupView.classList.remove('active');
//         });
//     });
// });


let carritoDeCompras = []

const containerProducto = document.querySelector('.container');
const contenedorCarrito = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')

/////////////// Hombre \\\\\\\\\\\\\\\\\\\

mostrarProductos(stockHombre);

function mostrarProductos(lista){
    lista.forEach((x)=>{
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML +=`<img id="${x.nombre}" src="${x.img}">
                        <h3>${x.tipo}</h3>
                        <p class="card-parrafo">$${x.precio}</p>
                        <a id=${x.id} class="card-btn">Agregar</a>`

        containerProducto.appendChild(div)

        let boton = document.getElementById(`${x.id}`)

        boton.addEventListener('click', ()=>{
            agregarAlCarrito(x.id)
        })
    })

}
function agregarAlCarrito(id) {
    let productoAgregar = stockHombre.filter(elemento => elemento.id == id)[0]
    carritoDeCompras.push(productoAgregar)
    actualizarContador()

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML +=`<h3>${productoAgregar.tipo}</h3>
                    <p>$${productoAgregar.precio}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash"></i></button>`

        contenedorCarrito.appendChild(div)

// Eliminar producto de carrito
        let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

        botonEliminar.addEventListener('click', ()=> {
            botonEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter((elemento) => elemento.id != productoAgregar.id) 
            actualizarContador()
        })
}

/////////////// Mujer \\\\\\\\\\\\\\\\\\\


const containerProducto2 = document.querySelector('.container2');

mostrarProducto2(stockMujer);

function mostrarProducto2(listaProductos){

    listaProductos.forEach((i) => {
        let div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML +=`<img id="${i.nombre}" src="${i.img}">
                        <h3>${i.tipo}</h3>
                        <p class="card-parrafo">$${i.precio}</p>
                        <a id=${i.id} class="card-btn">Agregar</a>`

        containerProducto2.appendChild(div);

        let boton = document.getElementById(`${i.id}`)

        boton.addEventListener('click', ()=>{
            agregarAlCarrito2(i.id)
        })
    })

}
function agregarAlCarrito2(id) {
    let productoAgregar2 = stockMujer.filter(elemento => elemento.id == id)[0]
    carritoDeCompras.push(productoAgregar2)
    actualizarContador()
    
    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML +=`<h3>${productoAgregar2.tipo}</h3>
                    <p>$${productoAgregar2.precio}</p>
                    <button id="eliminar${productoAgregar2.id}" class="boton-eliminar"><i class="fas fa-trash"></i></button>`

            contenedorCarrito.appendChild(div)

            let botonEliminar = document.getElementById(`eliminar${productoAgregar2.id}`)

            botonEliminar.addEventListener('click', ()=>{
            botonEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter((elemento) => elemento.id != productoAgregar2.id) 
            actualizarContador()
        })
    }






// Actualizar contador del carrito

function actualizarContador() {
    contadorCarrito.innerText = carritoDeCompras.length
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
    precioTotal.innerText = carritoDeCompras.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
}

function revisarLocal (){
    let carritoLocal = JSON.parse(localStorage.getItem('carritoDeCompras'))
    if(carritoLocal){
        carritoLocal.forEach((elemento)=>agregarAlCarrito(elemento.id))
    }
}

revisarLocal()

