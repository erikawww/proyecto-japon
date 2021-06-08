

const entradaInput = document.querySelector('.search-txt');
const buscarBtn = document.querySelector('.search-btn');
const resultado = document.querySelector('#container-buscador');

const filtrando = ()=>{
    // console.log(entradaInput.value)
    resultado.innerHTML = '';

    const texto = entradaInput.value.toLowerCase();
    for(let item of stockTotal){
        let nombre = item.nombre
        if(nombre.indexOf(texto) !== -1){
            let div = document.createElement('div');
            div.classList.add('card')
            div.innerHTML += `<img id="${item.nombre}" src="${item.img}">
                                <h3>${item.tipo}</h3>
                                <p class="card-parrafo">$${item.precio}</p>
                                <a id=${item.id} class="card-btn">Agregar</a>`
            resultado.appendChild(div)
        }
    }
}
buscarBtn.addEventListener('click', filtrando);
entradaInput.addEventListener('keyup',filtrando);

filtrando ()



