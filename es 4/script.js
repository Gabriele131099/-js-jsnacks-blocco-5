var studenti = {
    studente: [
        {
            nome: 'Tony',
            cognome: "D'Agata",
            age: 26,
            descrizione: ''
          } ,
          {
            nome: 'Tommy',
            cognome: 'Soro',
            age: 22,
            descrizione: ''
          } ,
          {
            nome: 'Giovanni',
            cognome: 'Rossi',
            age: 23,
            descrizione: ''
          } 
          
    ]
}

for (var i = 0; i < studenti.studente.length; i++) {

   
        studenti.studente[i].descrizione= prompt("descrivi lo studente")

    
    
}
