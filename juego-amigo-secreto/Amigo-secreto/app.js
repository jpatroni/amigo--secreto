// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];


// Agregar amigos al array
function agregarAmigo() {
    let NombreAmigo = document.querySelector("input").value;


    if (NombreAmigo.trim() === '') { // Validar nombre vacío
        alert('Añade un Nombre');
        return;
    }


    nombreAmigos.push(NombreAmigo); // Agrega al array
    console.log(NombreAmigo);
    console.log(nombreAmigos);


    limpiarCaja(); // Limpia el input después de agregar
    recorrerAmigos(); // Actualiza la lista
}


// Limpia el campo de entrada
function limpiarCaja() {
    document.querySelector("input").value = ""; // Limpia el valor del input
}


// Actualiza la lista de amigos en el DOM
function recorrerAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla
   
    for (let i = 0; i < nombreAmigos.length; i++) {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = nombreAmigos[i]; // Asigna el nombre al <li>
        listaAmigos.appendChild(li); // Agrega el <li> al <ul>
    }
}


// Seleccionar un amigo aleatorio y mostrarlo
function sortearAmigo() {
    const resultado = document.getElementById("resultado"); // Selecciona el elemento para mostrar el resultado
    resultado.innerHTML = ""; // Limpia el resultado anterior


    // Validar que haya amigos disponibles
    if (nombreAmigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
        return;
    }


    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);


    // Obtener el amigo correspondiente
    const amigoSorteado = nombreAmigos[indiceAleatorio];


    // Mostrar el amigo sorteado
    resultado.innerHTML = `<li><strong>Amigo secreto:</strong> ${amigoSorteado}</li>`;
}
