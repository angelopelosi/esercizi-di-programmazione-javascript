/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var numerosecondi = 10864 ;
var secondo = 1 ;
var minuto = secondo * 60 ;
var ora = minuto * 60 ;

oretot = numerosecondi / ora ;
mintot = (oretot - Math.floor(oretot))*60
sectot = (mintot - Math.floor(mintot))*60
console.log( 'ore' , Math.floor(oretot), 'minuti' , Math.floor(mintot), 'secondi', Math.floor(sectot) )
