let carrito = [];
const verCarrito = document.getElementById("carrito");

const seccion = document.getElementById("cards");

const wrapper = document.createElement('div')
wrapper.classList.add('card-wrapper');

const cardgrid = document.createElement('div')
cardgrid.classList.add('card-grid');

productos.forEach(producto => {


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
            imagen: producto.img
        })
    });

});


verCarrito.addEventListener('click', () => {
    const carritoClick = document.createElement('div');
    carritoClick.className="verCarrito"



});









