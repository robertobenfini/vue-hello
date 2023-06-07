Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

SOLUZIONE:
1.creo un div nel DOM a cui do un id app;
    1.1 all'interno del div precedente creo un altro div in cui darò la direttiva v-html per inserire in js il contenuto

2.in js salvo in una variabile globale la funzione createApp dall'istanza di Vue
    2.1 utilizzo la funzione creatApp
    2.2 collego creatApp con l'elemento del DOM predisposto al funzionamento dell'applicazione Vue
    2.3 definisco il data con il suo return
    2.4 all'interno del return definisco la variabile