# js-mail-dadi

## Traccia:

### Mail: 

Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

### Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
- Che ci sia un array da qualche parte?
- Se dobbiamo confrontare qualcosa che "cosa" ci serve?

## Consigli:

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
----------------------------------------------------------------------------

## Svolgimento:

### Mail
- Chiedo tramite <u>input</u> l'email dell'utente
    - controllo **SE** appartiene alla **LISTA** di email autorizzate all'accesso
    allora dirò che è Consentito L'accesso
    **ALTRIMENTI** diro che l'accesso è negato.

### Dadi
- Generare tramite funzione `` Math.random() `` un numero casuale che va da 1 a 6, sia per l'utente che per il computer;
**SE** uno dei due numeri generati è piu grande dell'altro vincerà.