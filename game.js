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
    switch(Machine){
        case 1: result.innerHTML = "La computadora eligio Piedra, Empataron !"; break;
        case 2: result.innerHTML = "La computadora eligio Papel, Perdiste !";   break;
        case 3: result.innerHTML = "La computadora eligio Tijera, Ganaste !";   break;
        default : result.innerHTML = "ERROR";
    }
}
function papel(){
    switch(Machine){
        case 1: result.innerHTML = "La computadora eligio Piedra, Ganaste !";  break;
        case 2: result.innerHTML = "La computadora eligio Papel, Empataron !"; break;
        case 3: result.innerHTML = "La computadora eligio Tijera, Perdiste !"; break;
        default : result.innerHTML = "ERROR";
    }
}
function tijera(){
    switch(Machine){
        case 1: result.innerHTML = "La computadora eligio Piedra, Perdiste !";  break;
        case 2: result.innerHTML = "La computadora eligio Papel, Ganaste !";    break;
        case 3: result.innerHTML = "La computadora eligio Tijera, Empataron !"; break;
        default : result.innerHTML = "ERROR";
    }
}
