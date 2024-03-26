
const cargarApi = async () => {


  const respuesta = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9");
  console.log(respuesta);

  const datos = await respuesta.json();
  console.log(datos);
  
  datos.forEach((personajes) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="personaje-img">
    <img src="${personajes.image}" alt="">
  </div>
  <div class="personaje-nombre">
    <p>${personajes.name}</p>
  </div>
  <div class="personaje-status">
    <p>${personajes.status}</p>
  </div>
    `

    const contenedor = document.querySelector("getapi");
    contenedor.append(div);
  });

}

cargarApi();