
/*
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");

const btn = document.getElementById("boton");
const closeBtn1 = document.getElementById("close");
const closeBtn2 = document.getElementById("close2");
const closeBtn3 = document.getElementById("close3");
const closeBtn4 = document.getElementById("close4");
const closeBtn5 = document.getElementById("close5");



document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;   

    if(/[1-9]/.test(nombre)||nombre==null){
        modal4.style.display = "block";
   
    }else if(/[1-9]/.test(apellidos)||apellidos==null){
        modal5.style.display = "block";
    
    }else if(!email.includes("@") || email==null){
        modal3.style.display = "block"

    }else if (/[a-z]/.test(telefono) || telefono.length >=8  && telefono.length <= 10 ||telefono==null) {
        modal2.style.display = "block";
    } else {
        modal1.style.display = "block";

        //Mandar correo
        console.log("enviado");
            btn.value = 'Sending...';
            
            const serviceID = 'service_7zepevs';
            const templateID = 'template_0hu5hdk';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        // Enviar datos al servidor
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario: nombre, email, password: contraseña })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

// Manejo de cierre de modales
closeBtn1.addEventListener("click", function() {
    modal1.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
});

closeBtn2.addEventListener("click", function() {
    modal2.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});
closeBtn3.addEventListener("click", function() {
    modal3.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
});
closeBtn4.addEventListener("click", function() {
    modal4.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
});
closeBtn5.addEventListener("click", function() {
    modal5.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target === modal5) {
        modal5.style.display = "none";
    }
});

//Contador
// Establecer la fecha objetivo (31 de octubre del año actual)
const fechaObjetivo = new Date(new Date().getFullYear(), 9, 31, 24, 0, 0); // 9 es octubre (mes 10 - 1)

// Función para actualizar el contador
function actualizarContador() {
    const ahora = new Date().getTime(); // Obtener el tiempo actual
    const distancia = fechaObjetivo - ahora; // Calcular la diferencia entre la fecha objetivo y la actual

    // Calcular los días, horas, minutos y segundos restantes
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar el tiempo en el formato DD:HH:MM:SS
    document.getElementById("timer").textContent = 
        (dias < 10 ? '0' : '') + dias + ":" +
        (horas < 10 ? '0' : '') + horas + ":" +
        (minutos < 10 ? '0' : '') + minutos + ":" +
        (segundos < 10 ? '0' : '') + segundos;

    // Si la cuenta regresiva ha terminado
    if (distancia < 0) {
        clearInterval(intervalo); // Detener el contador
        document.getElementById("timer").textContent = "¡El sorteo ha finalizado!";
    }
}

// Actualizar el contador cada segundo
let intervalo = setInterval(actualizarContador, 1000);

function comprobarFecha(){
    const fecha = new Date();
    const limite = new Date('2024-10-31T23:59:59');

    if (fecha >= limite) {
        window.location.href="ganadores.html";
    }
}
setInterval(comprobarFecha, 1000);
*/
