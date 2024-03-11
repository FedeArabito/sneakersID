const productos = [{
    nombre: 'Nike Max Janowsky',
    precio: 55000,
    imagen: "../img/janoski.webp"
},
{
    nombre: 'Air Jordan 1 Mid SE',
    precio: 60000,
    imagen: "../img/Air Jordan 1 Mid.webp"
},
{
    nombre: 'Adidas Superstars',
    precio: 45000,
    imagen: "../img/Adidas Supertars.webp"
},
{
    nombre: 'Vans Ultrarange',
    precio: 40000,
    imagen: "../img/Vans Ultrarange Exo.webp"
},
{
    nombre: 'Puma Palermo',
    precio: 57000,
    imagen: "../img/puma.webp"
},
{
    nombre: 'Topper Terre',
    precio: 50000,
    imagen: "../img/topper.webp"
},
{
    nombre: 'New Balance 373',
    precio: 43000,
    imagen: "../img/nbnegro.webp"
},
{
    nombre: 'New Balance 574',
    precio: 68500,
    imagen: "../img/nbvioleta.webp"
}];

const verCarrito = document.getElementById("carrito");
const carritoContenedor = document.getElementById("carrito-contenedor");

const seccion = document.getElementById("cards");

const wrapper = document.createElement('div')
wrapper.classList.add('card-wrapper');

const cardgrid = document.createElement('div')
cardgrid.classList.add('card-grid');

let carrito = [];
productos.forEach((producto) => {


    const cardbody = document.createElement('div')
    cardbody.classList.add('card');

    const cardimg = document.createElement('img')
    cardimg.classList.add('card-img');
    cardimg.src = producto.imagen;

    const cardtitulo = document.createElement('h2')
    cardtitulo.classList.add('card-titulo')
    cardtitulo.textContent = producto.nombre;

    const cardprecio = document.createElement('p')
    cardprecio.classList.add('card-precio')
    cardprecio.textContent = '$' + producto.precio;

    const cardAgregarCarrito = document.createElement('a')
    cardAgregarCarrito.classList.add('card-btn')



    const carritoImg = document.createElement('img')
    carritoImg.classList.add('card-carrito')
    carritoImg.src = '../img/cart.svg';

    cardAgregarCarrito.append(carritoImg);


    seccion.appendChild(wrapper)
    wrapper.append(cardgrid);
    cardgrid.append(cardbody);
    cardbody.append(cardimg, cardtitulo, cardprecio, cardAgregarCarrito);

    cardAgregarCarrito.addEventListener('click', () => {
        carrito.push({
            precio: producto.precio,
            nombre: producto.nombre,
            imagen:  producto.imagen,
        })
        console.log(carrito);

        verCarrito.addEventListener('click', () => {
            const verCarritoHeader = document.createElement('div');
            verCarritoHeader.className = "verCarritoHeader";
            verCarritoHeader.innerHTML = `
            <h2 style="color: white">Carrito</h2>
            <button>X</button>
            `;
            carritoContenedor.append(verCarritoHeader);
    
            const carritoClickBody = document.createElement('div');
            carritoClickBody.className = "carritoCuerpo";
            carritoContenedor.append(carritoClickBody)
            
            carrito.forEach((producto) => {
                carritoClickBody.innerHTML = `
                <img src="${producto.imagen}" alt= ""/>
                <h3>${producto.nombre}</h3>
                <p>$ ${producto.precio} </p>
                `;
            });
    
    
            const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
            console.log(total);
        });
    });



});













