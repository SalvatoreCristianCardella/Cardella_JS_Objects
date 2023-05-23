/*Rifare l'esercizio della rubrica (cercate di NON copiare il mio 👀 )*/



/*ES 1: Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso bello come Charizard).
  Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.*/
  /*let garage = {
    automobili: [{'marca':'Fiat', 'modelli':['pandino', 'punto', 'bravo']},{'marca':'BMW', 'modelli': ['m3','m4','m5']}, {'marca':'Ford', 'modelli':['mustang','fiesta','focus']}],
    ricerca: function(marcainput){
      let filtered = this.automobili.filter((automobili)=>automobili.marca.toLowerCase() == marcainput.toLowerCase() );
       return filtered;
    }
  }
  
  console.log(garage.ricerca('ford'));*/




/*EXTRA:   creare un oggetto bowling con una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi, ed abbia diverse funzionalità tra cui:

1)creare 10 punteggi casuali per ogni giocatore:

Suggerimento: questo metodo dovrà ciclare tutti i giocatori presenti nell’oggetto bowling, e aggiungere ad ogni proprietà scores, dieci punteggi casuali ad ogni giocatore

Utilizzare l’istruzione per generare un punteggio casuale da 1 a 10: Math.floor(Math.random() * (10 - 1 +1) + 1)

2)trovare il punteggio finale per ogni giocatore:(reduce)

Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#examples)

3)aggiungere un nuovo giocatore(push)
4)determinare il vincitore

Dati di partenza:*/
let bowling = {
    players: [
        {name: 'Nome1', scores: []},
        {name: 'Nome2', scores: []},
        {name: 'Nome3', scores: []},
        {name: 'Nome4', scores: []}
    ],
  punteggi: function(){
    this.players.forEach(element => {
      for (let i = 0; i < 10; i++) {
        element.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
      }
      console.log(element);
    });
  },
  FinalScore: function(){
    this.players.forEach(element =>{
      let sum = element.scores.reduce((a,e)=>a+e,0)
      console.log(sum);
      element.finalscore=sum;
    })
  },
  newPlayer: function(name) {
      this.players.push({'name': name, 'scores': []})
      console.log(this.players);
  },
  winner: function(){
    this.players.sort((a, b) => b.finalscore - a.finalscore);
    console.log(this.players);
}}
bowling.newPlayer('Nome5')
bowling.punteggi()
bowling.FinalScore();
bowling.winner()