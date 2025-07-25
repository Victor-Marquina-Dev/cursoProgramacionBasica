let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let selectionReiniciar = document.getElementById('reiniciar');  
    selectionReiniciar.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mascota') 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'block';

    let inputHipodogue = document.getElementById('Hipodogue');
    let inputcapipepo = document.getElementById('Capipepo');
    let inputRatigueya = document.getElementById('Ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodogue.checked) {
        spanMascotaJugador.innerHTML = 'Hipodogue';
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('Selecciona una mascota')
       
    }
 seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue';
    } else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego 🔥';
    ataqueAleatorioEnemigo ()
}
function ataqueAgua() {
    ataqueJugador = 'Agua 💧';
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra 🌱';
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego 🔥';  
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua 💧';
    } else {
        ataqueEnemigo = 'Tierra 🌱';
    }

    combate()
    
}

function combate() {
    let spanVidasJugador = document.getElementById('vidasJugador');
    let spanVidasEnemigo = document.getElementById('vidasEnemigo');

    if (ataqueEnemigo == ataqueJugador) {
        crearMernsaje('Empate');
    } else if (ataqueJugador == "Fuego 🔥" && ataqueEnemigo == "Tierra 🌱" ) {
        crearMernsaje('Ganaste');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Agua 💧' && ataqueEnemigo == 'Fuego 🔥') {
        crearMernsaje('Ganaste');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Agua 💧') {
        crearMernsaje('Ganaste');   
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMernsaje('Perdiste');
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas()
}

function revisarVidas(){
        if (vidasEnemigo == 0) {
            crearMensajeFinal('¡Felicidades, has ganado! 🏆');
        } else if (vidasJugador == 0) {
            crearMensajeFinal('Lo siento, has perdido 😢')  ;
        }
}

function crearMernsaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataca con ' + ataqueJugador + '<br>' + 'La mascota del enemigo ataca con ' + ataqueEnemigo + '<br>' + 'Resultado: ' + resultado;
    
    sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';



}

function reiniciarJuego() {
    location.reload();
    
}


function aleatorio(min , max ){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener("load", iniciarJuego);


