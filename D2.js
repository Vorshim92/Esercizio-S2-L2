/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi. < >
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 8;
if (num1 > num2) {
  console.log("ES1 - ", num1 + " è più grande di " + num2);
  } else {console.log("ES1 - ", num2 + " è più grande di " + num1);}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio2 = 4;
if (esercizio2 !== 5) {
console.log("ES2 - ", "il numero " + esercizio2 + " non è uguale a 5" );}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio3 = 5;
if (esercizio3 % 5 === 0){
  console.log("ES3 - ", esercizio3 + " è divisibile per 5");
} else console.log("ES3 - ", esercizio3 + " non è divisibile per 5");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio4 = 4;
let esercizio4_2 = 4;

if (esercizio4 === 8){
    console.log("ES4 - ", esercizio4 + "è uguale a 8");
    
  }
  else if (esercizio4_2 === 8) { 
    console.log("ES4 - ", esercizio4_2 + "è uguale a 8");
    
  }
  else if(esercizio4 + esercizio4_2 === 8) { 
    console.log("ES4 - ", "La somma dei due numeri è uguale a 8");
    
  }
  else if (esercizio4 - esercizio4_2 === 8){
    console.log("ES4 - ", "la sottrazione dei due numeri è uguale 8");
    
  } else console.log("ES4 - ", "nessuna delle condizioni è soddisfatta");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let spedizione = 10;
let prodotto;


prodotto = 100;
let totalShoppingCart = prodotto + spedizione;

if (prodotto >= 50) {
  spedizione = 0; 
  console.log("ES5 - ", "Hai diritto allo sconto e non pagherai la spedizione. Totale Carrello: " + totalShoppingCart);
} else {console.log("ES5 - ", "Non hai diritto allo sconto spedizione. Totale Carrello: " + totalShoppingCart);}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFridayState = true;
let blackFridaySaldo = 20;
let blackFridayTotal = (blackFridaySaldo / 100) * prodotto;
if (blackFridayState) {
  if (prodotto >= 50) {
  prodotto = prodotto - blackFridayTotal;
  spedizione = 0; 
  totalShoppingCart = prodotto + spedizione;
  console.log("ES6 - ", "Hai diritto allo sconto e non pagherai la spedizione. Totale Carrello: " + totalShoppingCart);
} else {prodotto = prodotto - blackFridayTotal;
  totalShoppingCart = prodotto + spedizione;
  console.log("ES6 - ", "Non hai diritto allo sconto spedizione. Totale Carrello: " + totalShoppingCart);}
} else console.log("ES6 - OGGI NON E' IL BLACK FRIDAY");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 15;
let numero2 = 8;
let numero3 = 20;

// Utilizzo un array per immagazzinare i valori numerici
let numeri = [numero1, numero2, numero3];
numeri.sort(function(a, b) {
  return b - a;
});
console.log("ES7.1 - Numeri ordinati con ARRAY:", numeri);

// Volendoli ordinare con IF
// Trova il numero più alto
if (numero1 >= numero2 && numero1 >= numero3) {
  // numero1 è il più alto
  if (numero2 >= numero3) {
    console.log("ES7.2 - Numeri ordinati con IF:", numero1, numero2, numero3);
  } else {
    console.log("ES7.2 - Numeri ordinati con IF:", numero1, numero3, numero2);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  // numero2 è il più alto
  if (numero1 >= numero3) {
    console.log("ES7.2 - Numeri ordinati con IF:", numero2, numero1, numero3);
  } else {
    console.log("ES7.2 - Numeri ordinati con IF:", numero2, numero3, numero1);
  }
} else {
  // numero3 è il più alto
  if (numero1 >= numero2) {
    console.log("ES7.2 - Numeri ordinati con IF:", numero3, numero1, numero2);
  } else {
    console.log("ES7.2 - Numeri ordinati con IF:", numero3, numero2, numero1);
  }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let verifica = 5;

console.log("ES8.1 - ", isNaN(verifica));
console.log("ES8.2 - ", typeof(verifica));


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let dispariPari = 10;

if (dispariPari % 2 === 0){

  console.log("ES9 - ", dispariPari + " è un numero PARI");
} else console.log("ES9 - ", dispariPari + " è un numero DISPARI");



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
    */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   let val = 7;

   if (val < 5) {
     console.log("Meno di 5");
   } else if (val < 10) {
     console.log("Meno di 10");
   } else {
     console.log("Uguale a 10 o maggiore");
   }
   
   /* ESERCIZIO 11
   Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log("ES11 - ",me);

/* ESERCIZIO 12
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log("ES12 - ", me);


/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log("ES13 - ", me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array = [];
for (let i=1; i<=10; i++)
{
array.push(i) 
}
console.log("ES14 - ", array);

/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array[array.length - 1] = 100;
console.log("ES15 - ", array);

/* SCRIVI QUI LA TUA RISPOSTA */
