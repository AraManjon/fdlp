# MÈTODES D'ARRAY: PUSH, POP, SHIFT, UNSHIFT

## Array com a **cua**

En ciències de la computació ens referim a una **cua** o **queue** com col·leccions ordenades que suporten dos operacions:

**[ ]  ⬅️  push:** afegir un element al final.

**⬅️  [ ] shift:** obtenir un element del principi, avançant la cua, on el segon element passa a ser el primer.

## Array com a **stack**

També existeix un altre concepte d'estructura de dades que és la **stack**. Aquesta estructura suporta:

**[ ]  ⬅️  push:** afegir un element al final 

**[ ] ➡️  pop:** obtindre un element del final.

📝 Notes:

> Les arrays tenen aquestes funcions, així que permeten ser utilitzades com a **queue** o com **stack**. En ciències de la computació quan una estructura de dades permet ser feta servir de les dues maneres és coneguda com a **deque**.

## **PUSH**

[ ]  ⬅️ 

Afegeix un element al **final** del array.

```js
const fruits = ["Apple", "Orange"]

fruits.push("Pear")

console.log( fruits ) // Apple, Orange, Pear

fruits.push("Plum", "Cherry")

console.log( fruits ) // Apple, Orange, Pear, Plum, Cherry
```

### **POP**

[ ] ➡️  

Exteu un element del **final** del array.

```js
const fruits = ["Apple", "Orange", "Pear"]

const lastFruit = fruits.pop() // Pear

console.log( fruits ) // Apple, Orange
```

### **SHIFT**

⬅️  [ ]

Extreu el **primer** element del array.

```js
const fruits = ["Apple", "Orange", "Pear"]

const firstFruit = fruits.shift() // Apple

console.log( fruits ) // Orange, Pear
```

### **UNSHIFT**

➡️  [ ]

Afegeix un element al **principi** del array.

```js
const fruits = ["Orange", "Pear"]

fruits.unshift('Apple')

console.log( fruits ) // Apple, Orange, Pear
```

### **Performance**

🐢 Els que operan al inici de l'array.

🐇 Els que operan al final de l'array.

Això és perquè a l'extreure o introduir un element de l'inici de l'array, s'hi han de recol·lorcar tots els elements de l'array. Si fem servir el ```shift```, haurem de passar el segon element a la primera posició, el tercer a segona i així fins al final.
