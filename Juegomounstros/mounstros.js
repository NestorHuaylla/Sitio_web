function iniciarjuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
}
function seleccionarMascotaJugador() {
    let inputMankuerno = document.getElementById("Mankuerno")
    let inputCoropi = document.getElementById("Coropi")
    let inputPalquino = document.getElementById("Palquino")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputMankuerno.checked){
        spanMascotaJugador.innerHTML = "Mankuerno"
    } else if (inputCoropi.checked) {
        spanMascotaJugador.innerHTML = "Coropi"
    } else if (inputPalquino.checked) {
        spanMascotaJugador.innerHTML = "Palquino"
    } else {
        alert("Selecciona una mascota")
    }
Function selleccionarMascotaEnemigo() {

}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) +1
} 

window.addEventListener("load", iniciarjuego)
