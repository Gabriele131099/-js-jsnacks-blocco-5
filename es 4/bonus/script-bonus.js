
   var  studente = [
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

    var stampa = document.getElementById('stampa');
    var variabileRandom = '';

for (var i = 0; i < studente.length; i++) {
        studente[i].descrizione=(prompt("descrivi lo studente"))
        
        variabileRandom += '<li>Studente: ';
        variabileRandom += studente[i]['nome'] + ', ';
        variabileRandom += studente[i]['cognome'] + ', ';
        variabileRandom += studente[i]['age'] + ', ';
        variabileRandom += studente[i]['descrizione'] + ', ';
        variabileRandom += '</li>';
    }
        

    
// stampa.innerHTML = '<li>model: </li>'

stampa.innerHTML = variabileRandom;  


