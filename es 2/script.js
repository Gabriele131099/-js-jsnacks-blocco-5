var lato = parseInt(prompt("inserisci la lunghezza di un lato"))
var geometrica = {
    triangoloEquilatero: [
        {lato:lato , perimetro: lato * 3, area:(lato * Math.sqrt(3))/2},
    ]
}

console.log(geometrica.triangoloEquilatero)