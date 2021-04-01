const burguerMenu = document.querySelector(".burguer-menu");
const navLinks = document. querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const cabe = document.querySelector(".cabecera")

burguerMenu.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    burguerMenu.classList.toggle("toggle");
    cabe.classList.toggle("blue")
    
    }); 

