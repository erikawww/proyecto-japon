// Stock productos \\

let stockHombre = [

    {
        id: 1, 
        nombre: "kimonoHombre1", 
        tipo: "Kimono Gold", 
        genero: "hombre", 
        precio: 3000, 
        talle: "1", 
        img:"assets/kimono2.png"
    },
    {
        id: 2, 
        nombre: "pantalonHombre", 
        tipo: "Zubon Black", 
        genero: "hombre", 
        precio: 2000, 
        talle: "1", 
        img:"assets/pantalon negro.jpg"
    },
    {
        id: 3, 
        nombre: "kimonoHombre2", 
        tipo: "Kimono Black", 
        genero: "hombre", 
        precio: 3000, 
        talle: "1", 
        img:"assets/kimonoblack.jpg"
    },

];

let stockMujer = [

    {
        id: 4, 
        nombre: "kimonoMujer1", 
        tipo: "Kimono Night", 
        info: "Kimono Black", 
        precio: 3000, 
        talle: "1", 
        img:"assets/kimonoMujer.jpeg"
    },
    {
        id: 5, 
        nombre: "pantalonMujer1", 
        tipo: "Zubon Spring", 
        info: "Zubon ", 
        precio: 2000, 
        talle: "1", 
        img:"assets/pantalonMujer1.jpg"
    },
    {
        id: 6, 
        nombre: "kimonoMujer2", 
        tipo: "Kimono Spring", 
        info: "Kimono Black", 
        precio: 3000, 
        talle: "1", 
        img:"assets/kimonoSpring.jpg"
    },
];


const stockTotal = stockHombre.concat(stockMujer);