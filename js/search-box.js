const filtrando = () => {
  $("#container-buscador").html = "";
  let texto = $(".search-txt").val().toLowerCase();

  for (let item of stockTotal) {
    let nombre = item.nombre;
    if (nombre.indexOf(texto) !== -1) {
      $("#container-buscador").append(`<div class="card">
                                  <img id="${item.nombre}" src="${item.img}">
                                  <h3>${item.tipo}</h3>
                                  <p class="card-parrafo">$${item.precio}</p>
                                  <a id=${item.id} class="card-btn">Agregar</a></div>`);
    }
  }
};
$(".search-btn").on("click", function () {
  $("#container-buscador").empty();
  filtrando();
});
