const burguerMenu = document.querySelector(".burguer-menu");
const navLinks = document. querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links .nav-item");
// const cabe = document.querySelector(".cabecera")

burguerMenu.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    burguerMenu.classList.toggle("toggle");
    // cabe.classList.toggle("blue")
    
    });


    // Fullpage
    // const seccionesPagina = new fullpage('#fullpage', {
        
    // });


// pop up cards

var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.card-btn');
var closeBtns = document.querySelectorAll('.close-btn');

// Abrir
var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
}
popupBtns.forEach((popupBtn, i) =>{
    popupBtn.addEventListener("click",() =>{
        popup(i)
    });
});
// Cerrar
closeBtns.forEach((closeBtn)=> {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});