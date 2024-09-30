const item = document.getElementById("item");
const contenedor = document.getElementById("contenedor");
const bot_agregar = document.getElementById("agregar");
const bot_limpiar = document.getElementById("limpiar");

document.addEventListener("DOMContentLoaded",function(e){
    mostrarDatos();
})

//Agrego datos al array

function agregarDatos () {
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    let input = item.value;
    lista.push(input);
    localStorage.setItem('lista', JSON.stringify(lista));
    item.value = "";
}

//Muestro los datos en la lista
function mostrarDatos() {
    if (JSON.parse(localStorage.getItem("lista")) != null) {
        let lista = JSON.parse(localStorage.getItem("lista"));
        let listAppend = "";
        lista.forEach(element => {
            listAppend += `
        <li class="list-group-item"> ${element}</li>`
            contenedor.innerHTML = listAppend;
        });
    }
}

bot_agregar.addEventListener('click',function(e) {
    if (item.value != ""){
        agregarDatos();
        mostrarDatos();
    }
})

bot_limpiar.addEventListener('click', function(e){
    localStorage.clear();
    location.reload();
})