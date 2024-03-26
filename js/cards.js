const verCarrito = document.getElementById("carrito");
const carritoContenedor = document.getElementById("carrito-contenedor");
const carritoCounter = document.getElementById("carrito-counter")
const seccion = document.getElementById("cards");

const wrapper = document.createElement('div')
wrapper.classList.add('card-wrapper');

const cardgrid = document.createElement('div')
cardgrid.classList.add('card-grid');

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
            const productoRepetido = carrito.some((repetido) => repetido.id === producto.id);
            productoRepetido ?
                carrito.map((repetido) => {
                    repetido.id === producto.id && repetido.cantidad++
                })
                :
                carrito.push({
                    precio: producto.precio,
                    nombre: producto.nombre,
                    imagen: producto.imagen,
                    cantidad: producto.cantidad,
                    id: producto.id
                })

            const contadorCarrito = carrito.reduce((acc, producto) => {
                return acc + producto.cantidad
            }, 0);
            carritoCounter.innerHTML = `
            ${contadorCarrito}
            `;
            guardarLocale();

            Toastify({
                text: `${producto.nombre} ha sido agregado al carrito`,
                style: {
                    color: "black",
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                duration: 1000
            }).showToast();
        });


        verCarrito.addEventListener('click', () => {
            carritoContenedor.innerHTML = "";
            carritoContenedor.style.display = "flex";
            carritoContenedor.style.flexDirection = "column";

            const verCarritoHeader = document.createElement('div');
            verCarritoHeader.className = "verCarritoHeader";
            verCarritoHeader.innerHTML = `
            <h2 style="color: var(--clr--primary)">Carrito</h2>
            <button class="vercarritoClose">X</button>
            `;
            carritoContenedor.append(verCarritoHeader);

            const verCarritoClose = document.querySelector(".vercarritoClose");
            verCarritoClose.addEventListener("click", () => {
                carritoContenedor.style.display = "none";
            });

            const carritoClickBody = document.createElement('div');
            carritoClickBody.className = "carritoCuerpo";
            carritoContenedor.append(carritoClickBody)

            carrito.forEach((producto) => {

                const productItem = document.createElement('div');
                productItem.className = "productoEnCarrito";
                productItem.innerHTML = `
                <img src="${producto.imagen}" alt= ""/>
                <h3>${producto.nombre}</h3>
                <p>$ ${producto.precio} </p>
                <p>x${producto.cantidad}</p>
            `;
                carritoClickBody.appendChild(productItem);
            });

            const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

            const carritoFooter = document.createElement('div')
            carritoFooter.className = 'carritoFooter'
            carritoFooter.innerHTML = `
            <h4 style="background-color= red" color="red">Total: $${total}</h4>
            `;
            carritoClickBody.appendChild(carritoFooter)
        });
    });






const guardarLocale = () => {
    const JSONcarrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", JSONcarrito);
};















