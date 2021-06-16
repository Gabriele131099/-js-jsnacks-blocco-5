var lato = parseInt(prompt("inserisci la lunghezza di un lato"))
var geometrica = {
    lato:lato , 
    perimetro: lato * 3 + " cm", 
    area:Math.floor((lato * Math.sqrt(3))/2) + " cm^2"
    
}

console.log(geometrica)