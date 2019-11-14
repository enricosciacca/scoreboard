ESERCIZIO ANGULAR
==================

Lo scopo è realizzare uno scoreboard per tenere e gestire una serie di punteggi
(da 0 a 100).

Prima parte
------------------

Un punteggio è composto da
    - Un'etichetta
    - Un valore numerico
    - due bottoni ("+" e "-") per incrementare/diminuire il valore
    - Una valutazione in "stelline" relativa al valore(Ad esempio,
      con il carattere Unicode ⭐)

##Esempio:

```
Etichetta    55 [+][-]
[***  ]
```

Seconda parte
------------------

Rendere parametrico il Component e passare tramite parametri l'etichetta
e il punteggio di partenza.


Terza parte
------------------

Sostituire il punteggio singolo (singolo component) con un Component che
gestisce una serie di punteggi, e riutilizzare (adattandolo) il Component
creato nella prima parte.

La serie di punteggi è fornita ad es. tramite una stringa JSON costante.

Esempio di punteggi:
```
{
    "scores": [
        {"name": "Gino", "score": 55},
        {"name": "Lino", "score": 100},
        {"name": "Pino", "score":  3},
        {"name": "Nino", "score": 85},
        ...
    ]
}
```

Quarta parte
------------------

Fornire i dati sugli score (sempre da stringa costante, ma) attraverso un Service.


Quinta parte
------------------

Usando il "finto server" (lanciato con ```npm run fakeserver```, raggiungibile a
```http://localhost:3000/scores/``` ), ricavare i dati nel service via http.

