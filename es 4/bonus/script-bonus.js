   var studente = [
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

    
    var stampa = document.getElementById('stampa') // stampa.innerHTML = '<li>studente: </li>'
    var variabileRandom = '' //variabile che avrà il contenuto da stampare

for (var i = 0; i < studente.length; i++) { //finchè I è minore della lunghezza di array Studenti
        studente[i].descrizione=(prompt("descrivi lo studente")) //richiede e carica la descrzione degli studenti
        
        variabileRandom += '<li>Studente: '    // voglio stampare in un ul , tramide degli LI
        variabileRandom += studente[i]['nome'] + ', '  // il nome il cognome l'età e la descrizione
        variabileRandom += studente[i]['cognome'] + ', '   //dello studente I
        variabileRandom += studente[i]['age'] + ', '
        variabileRandom += studente[i]['descrizione'] 
        variabileRandom += '</li>'
    }

stampa.innerHTML = variabileRandom  //stampo il contenuto di VARIABILERANDOM


