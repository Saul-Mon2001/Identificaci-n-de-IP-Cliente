//alert("hola mundo");
// Hacer una petición para un usuario con ID especifico
let IP=document.getElementById("IP");
let Pais=document.getElementById("Pais");
let Continente=document.getElementById("Continente");
let Zona_Horaria=document.getElementById("Zona_Horaria");
window.addEventListener('load', () => {
  console.log('La página se ha cargado completamente.');
  // Tu código aquí
});


axios.get("https://saulymajo.000webhostapp.com/php-geoapi-api/index.php")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data.country_name);
    IP.innerHTML = response.data.ipCliente;
    Pais.innerHTML = response.data.country_name;
    Continente.innerHTML = response.data.continent_name;
    Zona_Horaria.innerHTML = response.data.current_time;
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

  window.addEventListener('beforeunload', () => {
    console.log('La página se está recargando.');
    
  });