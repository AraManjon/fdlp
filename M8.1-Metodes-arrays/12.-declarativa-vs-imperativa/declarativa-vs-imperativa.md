# DECLARATIVA VS. IMPERATIVA

**Paradigma de la programació**, és una forma de pensar en com organitzem un programa seguint una sèrie de principis i regles.

JavaScript és un llenguatge multiparadigma, això vol dir que pot utilitzar la combinació de diferents paradigmes.


## **Declarativa vs. Imperativa**

### - Imperatiu === com ho fa.


Dins del paradigma **procedimental**, **basat en prototips** o **orientat a objectes** sol ser més comú fer servir el codi imperatiu.

Exemple:

```js
const numbers = [1, 2, 3, 4, 5]

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)
```

### - Declaratiu === que fa.

En canvi, en **programació funcional** es fa servir un estil més declaratiu.

Exemple:

```js
const numbers = [1, 2, 3, 4, 5]

let sum = numbers.reduce((prev, acc) => prev + acc)

console.log( sum )
```

🚨 Important!
> Sempre que podem, hem de prioritzar l'ús d'un estil declaratiu en el nostre codi, ja que, és més fàcil de compondre i més llegible i expressiu.

> Una bona pràctica és prioritzar l'ús de funcions d'alt nivell com ```filter```, ```map```, ```reduce```... en comptes d'estructures de control i condicionals. 

> Els mètodes són molt més explicatius. Es limiten a expressar la lògica i allunyar-se de detalls d'implementació (declarar variable a 0, fins quan es realitza el bucle, actualitzar comptador d'un en un...).