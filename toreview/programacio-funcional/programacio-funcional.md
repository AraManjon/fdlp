# PROGRAMACIÓ FUNCIONAL

Programació funcional és un **paradigma de la programació**, això vol dir, que és una forma de pensar en com organitzem un programa seguint una sèrie de principis que veurem més endavant.

Javascript és un llenguatge multiparadigma, això vol dir que pot utilitzar la combinació de diferents paradigmes.

## **Declarativa vs. Imperativa**

A diferència d'altres paradigmes com OOP o programacio procedimental que són paradigmes imperatius, la programació funciona és declarativa.

Això vol dir que en programació funcional prioritzem el que està fent el nostre software i no el com ho està fent.

Per exemple: en programació funcional es prioritza l'ús de **mètodes d'array** en comptes de loops. Els mètodes sóon molt més explicatius. Es limiten a expressar la lògica i allunyar-se de detalls d'implementació (declarar variable a 0, fins quan es realitza el bucle, actualitzar comptador d'un en un... ).

## **Funcions pures**

Les funcions pures són aquelles que compleixen els següents requisits:

- Donant els mateixos arguments sempre retorna el mateix resultat. Concepte **transparència referencials**

- No te **side-effects**, és a dir, no afecta un estat fora del seu scope.

```js
const sum = (a, b) => (a + b)

sum(2, 3) // => 5

sum(2, 3) // => 5

```

✅ Les funcions pures fan que codi sigui més fàcil de preveure, aïllar, reutilitzar i testejar.

## **Composició de funcions**

La composició de funcions és un mecanisme poderós alhora de desenvolupar software. Consisteix a combinar funcions per produir noves de major complexitat.

🔍 [Conceptes més avançats](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-3-composici%C3%B3n-f82ac871dcfb)

## **Immutabilitat**

Ens referim a immutable quan un objecte no es pot modificar després de la seva creació. A Javascript es important no confondre **const** amb immutabilitat, ja que const el que crea és un enllaç a un identificador que no es pot reassignar.

A javascript trobem com a valors inmutables, els valors **primitius**. Per treballar amb estructures de dades con a vaalors immutables, hem d'utilitzar llibreries com per exemple Immutable.js i Mori.

## **Estat compartit**

És qualsevol variable, objecte o espai en memòria que existeix en un àmbit compartit o com a propietats d'un objecte que es passa entre àmbits.

La programació funcional evita l'ús d'estats compartits, utilitzant en el seu lloc dades immutables i funcions pures.


El problema d'estats compartits és que per saber l'efecte d'una funció hem de conèixer l'historial de cada variable compartida.


## **Side-effects**

Un efecte secundari és qualsevol canvi en l'estat de l'aplicació que sigui observable fora de la funció executada i que no sigui el seu valor de retorn.


📚 Més recursos:

- [Què és la programacióo funciona?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

- [Conceptes Programació funcional](https://softwarecrafters.io/javascript/introduccion-programacion-funcional-javascript)



 