

const menuHamburguesa = document.querySelector(".hamburguer");
menuHamburguesa.onclick = function () {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

const productos =[{
    nombre: 'Janowsky',
    precio: 55000,
    imagen: "janoski.webp"
},
{
    nombre: 'Air Jordan',
    precio: 60000,
    imagen: "janoski.webp"
},
{
    nombre: 'Superstars',
    precio: 45000,
    imagen: "janoski.webp"
},
{
    nombre: 'Vans',
    precio: 40000,
    imagen: "janoski.webp"
},
{
    nombre:'Puma',
    precio: 57000,
    imagen: "janoski.webp" 
},
{
    nombre:'Topper',
    precio: 50000,
    imagen: "janoski.webp"
},
{
    nombre: 'Jaguar',
    precio: 43000,
    imagen: "janoski.webp" 
},
{
    nombre: 'New Balance',
    precio: 68500,
    imagen: "janoski.webp"
}];

const seccion = document.getElementById("cards");

const wrapper = document.createElement('div')
wrapper.classList.add('card-wrapper');

const cardgrid= document.createElement('div')
cardgrid.classList.add('card-grid');

const crearProductos = () =>{
    productos.forEach(producto => {


        const cardbody = document.createElement('div')
        cardbody.classList.add('card');

        const cardimg = document.createElement('img')
        cardimg.classList.add('card-img');
        cardimg.src='../img/janoski.webp'

        const cardtitulo = document.createElement('h2')
        cardtitulo.classList.add('card-titulo')
        cardtitulo.textContent= producto.nombre;

        const cardprecio = document.createElement('p')
        cardprecio.classList.add('card-precio')
        cardprecio.textContent= producto.precio;

        const cardAgregarCarrito = document.createElement('a')
        cardAgregarCarrito.classList.add('card-btn')
        cardAgregarCarrito.textContent='cart.svg';

        seccion.appendChild(wrapper)
        wrapper.append(cardgrid);
        cardgrid.append(cardbody);
        cardbody.append(cardimg,cardtitulo,cardprecio,cardAgregarCarrito);
        


    });
}

crearProductos();