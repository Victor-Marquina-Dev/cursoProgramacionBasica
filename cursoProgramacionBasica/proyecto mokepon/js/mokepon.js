function iniciarJuego(){
let botonMascotaJugador = document.getElementById('boton-mascota') 
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodogue = document.getElementById('Hipodogue');
    let inputcapipepo = document.getElementById('Capipepo');
    let inputRatigueya = document.getElementById('Ratigueya');


    if (inputHipodogue.checked) {
        alert('Seleccionaste a Hipodog');
    } else if (inputcapipepo.checked) {
        alert('Seleccionaste a Capipepo');
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya ');
    }
}


window.addEventListener('load', iniciarJuego);

