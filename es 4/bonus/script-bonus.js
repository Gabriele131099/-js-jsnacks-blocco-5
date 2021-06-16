var scuola = {
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

for (var i = 0; i < scuola.studente.length; i++) {
        scuola.studente[i].descrizione=(prompt("descrivi lo studente"))
}

var stampa = document.getElementById('stampa');
    
// stampa.innerHTML = '<li>model: </li>'
var variabileRandom = '';

for (var key in scuola) {  // ciclo nell'oggetto

    if (key === 'studente') { // qui scelgo l'array
        
        for (var x = 0; x < scuola[key].length; x++) { // ciclo l'array dei student
            variabileRandom += '<li>Studente: ';
            variabileRandom += scuola[key][x]['nome'] + ', ';
            variabileRandom += scuola[key][x]['cognome'] + ', ';
            variabileRandom += scuola[key][x]['age'] + ', ';
            variabileRandom += scuola[key][x]['descrizione'] + ', ';
            variabileRandom += '</li>';
            
        }


    }
}
stampa.innerHTML = variabileRandom;  


