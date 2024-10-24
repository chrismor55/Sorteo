document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/ganadores')
    .then(response => response.json())
    .then(ganadores => {
        const listaGanadores = document.querySelector('#premiados ul');
        listaGanadores.innerHTML = ''; // Limpiar la lista actual

        ganadores.forEach(ganador => {
            const li = document.createElement('li');
            li.textContent = `Persona: ${ganador.usuario} ${ganador.email}`; // Aquí puedes ajustar el formato
            listaGanadores.appendChild(li);
        });
    })
    .catch(error => console.error('Error al obtener los ganadores:', error));
});