# TEMPLATE LITERALS

Molts cops volem concatenar a una cadena de caràcters amb expressions.

Exemple:

```js
let name = 'Pepita'
console.log('Benvingut/da ' + name) // "Benvingut/da Pepita"
```

Exemple:

```js
let num1 = 5
let num2 = 10
console.log('El resultat de la suma de ' + num1 + ' i ' + num2 + ' és ' + (num1 + num2) + '.') //El resultat de la suma de 5 i 10 és 15.
```

Per aquestes concatenacions podem fer servir els **template literals** que concatenen cadenes literals. 

Es delimiten per cometes invertides ```(` `)``` en comptes de cometes simples o dobles.

Poden contenir expressions encapsulades en claus ```${expressió}```.

Exemple:

```js
let name = 'Pepita'
console.log(`Benvingut/da ${name}`) // "Benvingut/da Pepita"
```

```js
let num1 = 5
let num2 = 10
console.log(`El resultat de la suma de ${num1} i ${num2} és ${num1 + num2}.`) // El resultat de la suma de 5 i 10 és 15.
```


