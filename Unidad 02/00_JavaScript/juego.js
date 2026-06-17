const numeroSecreto = Math.floor(Math.random()*10 +1);
const numeroJugador = parseInt(prompt("Adivina el numero del 1 al 10"))

console.log("Este es el numero con el que juegas $(numeroJugador")

if(numeroJugador === numeroSecreto){
    console.log("Felicitaciones, adivinaste el numero secreto")
}else if (numeroJugador < numeroSecreto){
    console.log ("Numero menor. Intenta nuevamente")
}else if (numeroJugador > numeroSecreto){
    console.log ("Numero mayor. Muy alto, intenta nuevamente")
}else{
    console.log("numero no encontrado, intenta nuevamnte")
}


