$(document).ready(function () {
  $(".card-btn").click(function () {
    Swal.fire({
      text: "Agregando tu producto al carrito",
      background: "#fefefe",
      timer: 2300,
      timerProgressBar: true,
      toast: true,
      position: "center-right",
    });
  });

  $(".btn-comprar").click(function () {
    Swal.fire({
      title: "Confirma la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BC002D",
      cancelButtonColor: "#222",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("La compra se ha realizado con éxito");
      }
    });
  });
});
