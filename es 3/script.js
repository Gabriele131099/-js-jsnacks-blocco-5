var arrayNum = []
var media = 0
for (var i = 0; i < 3; i++) {
    
    var num = prompt("inserisci un numero")
    arrayNum.push(num)
    media += arrayNum[i] / 3
}
