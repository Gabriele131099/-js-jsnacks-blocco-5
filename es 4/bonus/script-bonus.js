var studenti = {
    studente: [
        {
            nome: "Tony",
            cognome: "D'Agata",
            age: 26,
            descrizione: ""
          } ,
          {
            nome: "Tore",
            cognome: "Soro",
            age: 22,
            descrizione: ''
          } ,
          {
            nome: "Mario",
            cognome: "Rossi",
            age: 23,
            descrizione: ""
          }   
    ]
}

for (var i = 0; i < studenti.studente.length; i++) {
        studenti.studente[i].descrizione= prompt("descrivi lo studente")
}

var stampa = document.getElementById('stampa');
    
// stampa.innerHTML = '<li>model: </li>'
var variabileRandom = '';

for (var key in studenti) {  // ciclo nell'oggetto

    if (key === 'studente') { // qui scelgo l'array
        variabileRandom += '<li>Studente: ';f

        for (var x = 0; x < studenti[key].length; x++) { // ciclo l'array dei student
            variabileRandom += studenti[key][x]['nome'] + ', ';
            variabileRandom += studenti[key][x]['cognome'] + ', ';
            variabileRandom += studenti[key][x]['age'] + ', ';
            variabileRandom += studenti[key][x]['descrizione'] + ', </br>';

        }

        variabileRandom += '</li>';

    } else {
        variabileRandom += '<li>' + key + ': ' + studenti[key] + '</li>'
    }
}
stampa.innerHTML = variabileRandom;  


