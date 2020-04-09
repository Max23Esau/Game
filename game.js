// piedra = 1
// papel = 2
// tijera = 3

var rock = document.getElementById("piedra");
rock.addEventListener("click", piedra);

var paper = document.getElementById("papel");
paper.addEventListener("click", papel);

var scissors = document.getElementById("tijera");
scissors.addEventListener("click", tijera);

var result = document.getElementById("resultado");
const Machine = Math.floor(Math.random() * (4 - 1) + 1);

function piedra(){
    if(Machine == 3){
        result.innerHTML = "La computadora eligio Tijera, Ganaste !";
    }
    else if (Machine == 2) {
        result.innerHTML = "La computadora eligio Papel, Perdiste !";
    }
    else {
        result.innerHTML = "La computadora eligio Piedra, Empataron !";
    }
}
function papel(){
    if(Machine == 1){
        result.innerHTML = "La computadora eligio Piedra, Ganaste !";
    }
    else if (Machine == 3) {
        result.innerHTML = "La computadora eligio Tijera, Perdiste !";
    }
    else {
        result.innerHTML = "La computadora eligio Papel, Empataron !";
    }
}
function tijera(){
    if(Machine == 2){
        result.innerHTML = "La computadora eligio Papel, Ganaste !";
    }
    else if (Machine == 1) {
        result.innerHTML = "La computadora eligio Piedra, Perdiste !";
    }
    else {
        result.innerHTML = "La computadora eligio Tijera, Empataron !";
    }
}
