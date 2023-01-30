# BONES PRÀCTIQUES AMB CONDICIONALS

##  **Evitar l'ús del switch**

Normalment, utilitzem la sentència ```switch``` per operar amb diferents condicions i és una manera d'evitar l'ús de molts ```else-if```.

El problema de l'ús del ```switch```, és que crea un codi difícil de llegir, d'una forma complicada i amb una sintaxi poc intuïtiva.

Si volem afegir tres condicions noves, hauríem d'escriure massa codi burocràtic, un nou `case` amb el codi a operar i un `break`, i això per cada nou cas, al final es faria tediós i acabaríem copiant i enganxant codi...

Exemple:

```js
const type = prompt('Introdueix el tipus de pokemon que vols', 'Electric')

switch (type) {
  case 'Water':
    console.log('Squirtle')
    break
  case 'Fire':
    console.log('Charmander')
    break
  case 'Plant':
    console.log('Bulbasur')
    break
  case 'Electric':
    console.log('Pikachu')
    break
  default:
    console.log('Mew')
}
```

### Com podem evitar l'ús del ```switch```? Amb ```literals d'objectes```.

Els objectes són simples, fàcils d'escriure, llegir i mantenir. Veiem com seria l'exemple anterior amb un literal d'objecte.

```js
const type = prompt('Introdueix el tipus de pokemon que vols', 'Electric')

const pokemonDictionary = {
    Water: 'Squirtle',
    Fire: 'Charmander',
    Plant: 'Bulbasur',
    Electric: 'Pikachu'
  };

console.log(pokemonDictionary[type] ?? 'Mew')

```

##  **Fer condicionals descriptius**

És molt fàcil acabar escrivint una condició que sigui difícil d'entendre... Això ens portaria a haver d'escriure comentaris explicant que fa exactament o invertir temps a esbrinar que és el que s'està comparant exactament.

Exemple:

```js
function checkGameStatus() {
  if ( remaining === 0 || (remaining === 1 && remainingPlayers === 1) || remainingPlayers === 0 ) {
    console.log('El joc a acabat')
  }
}
```

Per millorar la lectura d'aquest condicional podem extraure una funció perquè comprovi aquest condicional:

```js

function checkGameStatus() {

  const isGameLost = remaining === 0 || remaining === 1 && remainingPlayers === 1 || remainingPlayers === 0 

  if (isGameLost) {
    console.log('El joc a acabat')
  }
}
```

##  **Evitar sentències ```if``` niades**

Si una funció és molt gran i té massa línies nidades, ens estarà indicant que està fent moltes coses. **Les funcions només hi han de fer una cosa i fer-la bé**.

Solució:

1.- Hem d'intentar que les funcions siguin tan curtes com sigui possible, idealment de 4-5 línies, podem ficar-nos un màxim de línies de 15-20, encara que sempre hauríem de revisar si es pogués dividir en diverses funcions.

2.- Evitar nidar sentències ```if```, màxim 1-2 nivells d'indentació. Per evitar el codi espagueti 🍝.

Exemple:

```js
function getPayAmount () {
    let amount;

    if (isDead) {
        amount = deadAmount()
    } else {
        if (isSeparated) {
            amount = separatedAmount()
        } else {
            if (isRetired) {
                amount = retiredAmount()
            } else {
                amount = normalPayAmount()
            }
        }
    }
    return amount
}
```

### Per evitar condicionals nidats, podem fer servir les **clàusules guardades**

És escriure el codi de forma que fa comprovacions de condicions abans de continuar amb l'execució del codi.

Exemple:

```js
function getPayAmount() {
    if (isDead) return deadAmount() 
    if (isSeparated) return separatedAmount() 
    if (isRetired) return retiredAmount()
    return normalPayAmount()
}
```

##  **Evitar l'ús del ```else```**

L'else, ens deixa la porta oberta a tot el que no compleixi la condició del ```if```.

Acaba sent poc clar i explicatiu quan i per què volem que s'executi el codi de la via alternativa que ens ofereix l'```else```.

👍 Millor utilitzar clàusules de guarda

👍 Operador ternari

👍 Retornar ```undefined``` quan no es dona la condició.

Exemple:

```js
let person = { 
   phone: { 
      exists: false, 
      number: '+34 622 62 62 62' 
   }
}

// bad
function hasESNumber() {
   if (person.phone.exists === true) {
      if (person.phone.number.startsWith('+34')) {
        return true
      }
   } else {
        return false
   }    
}

// regular
function hasESNumber() {
   if (person.phone.exists === true && person.phone.number.startsWith('+34')) {
        return true
   } else {
        return false
   }    
}

// good
function hasESNumber() {
    if (person.phone.exists === true && person.phone.number.startsWith('+34')) {
        return true
    }
    return false
}

// better

function hasESNumber() {
    return person.phone.exists === true && person.phone.number.startsWith('+34')) 
}

```









