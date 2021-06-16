var arrayNum = []
var media = 0
for (var i = 0; i < 3; i++) {  
    var num = prompt("inserisci un numero")
    arrayNum.push(num)
    media += arrayNum[i] / 3
}

var mediaPlayer = 0
var player = {
    giocatori: [
    {
    nome:"Marco" , 
    cognome: "Rossi", 
    anno:"1980",
    punteggio:Math.floor(Math.random()*150)
    },{
    nome:"Giovanni" , 
    cognome: "Sanna", 
    anno:"1990",
    punteggio:30
    },{
    nome:"Mario" , 
    cognome: "Porcu", 
    anno:"1985",
    punteggio:15
    }]
    
}

for (var i = 0; i < 3; i++) {
    mediaPlayer += parseInt(player.giocatori[i].punteggio)
}
mediaPlayer = mediaPlayer / player.giocatori.length
console.log(mediaPlayer + " media giocatori" , media+ " media")