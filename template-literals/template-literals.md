# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Template literals**

Molts cops volem concatenar a una cadena de caràcters amb expressions.

```
let name = 'Pepita'
console.log('Benvingut/da ' + name)
// "Benvingut/da Pepita"
```

```
let a = 5
let b = 10
console.log('Quinze és ' + (a + b) + ' i\nno ' + (2 * a + b) + '.')
// "Quinze és 15 i
// no 20."
```

Notes:
> ```\n``` es fa servir per indicar salt de línia.

Per aquestes concatenacions podem fer servir els **template literals** que concatenen cadenes literals. 

Es delimiten per cometes invertides ```(` `)``` en comptes de cometes simples o dobles.

Poden contenir expressions encapsulades en claus ```${expressió}```.

Exemple:

```
let name = 'Pepita';
console.log(`Benvingut/da ${name}`);
// "Benvingut/da Pepita"
```

```
let a = 5
let b = 10
console.log(`Quinze és ${a + b} i
no ${2 * a + b}.`)
// "Quinze és 15 i
// no 20."
```

```
let a = 5
let b = 10
console.log(`${a}${b}`)
// "510"
```
```
let a = 5;
let b = 10;
console.log(`${a + b}`);
// "15"
```

🚨 De vegades trobem que aquest mètode d'encadenar, també se li diu **template strings**, no seria del tot correcte, ja que el que concatena són cadenes literals, i aquestes no hi han de ser exclusivament strings.

🚨 Tenir en compte que el que retorna el **template literal** és el resultat d'encadenar en tipus string.


