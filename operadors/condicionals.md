# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Condicionals**

De vegades hem de determinar diferents accions segons diferents condicions.

### **Declaració ```if```**

La sentència ```if(...)``` avalua una condició entre parèntesis i, si el resultat és ```true```, executa un bloc de codi.

```
const correctYear = 2015
const responseYear = prompt('En quin any es va publicar l'especificació ECMAScript-2015?', '');

if (responseYear == correctYear) alert( 'Correcte!' );
```

```
const correctYear = 2015
const responseYear = prompt('En quin any es va publicar l'especificació ECMAScript-2015?', '');

if (responseYear == correctYear) {
  alert( 'Correcte!' );
  alert( "Ets molt intel·ligent" );
}
```

```
const correctYear = 2015
const responseYear = prompt('En quin any es va publicar l'especificació ECMAScript-2015?', '');
const isCorrect = correctYear == responseYear

if (isCorrect) {
  alert( 'Correcte!' );
  alert( "Ets molt intel·ligent" );
}
```

🚨 Abans de ES6, després del ```if(...)``` sempre utilitzàvem ```{}```, amb aquesta actualització, quan dins d'un bloc només tenim una declaració, és a dir, només una línia de codi, les curly braces són opcionals.

### **Conversió**

Avalua l'expressió entre parèntesis i converteix el resultat en un boolean.

```
if (0) {
    console.log('no entra')
}
```
```
if (1) {
    console.log('entra')
}
```

🚨 ```0, "", null, undefined i NaN``` són avaluats com a ```false```. 

```
Boolean('') //false
Boolean(' ') //true
Boolean([]) //true
Boolean({}) //true
```

### **Clàusula ```else```**

La instrucció if pot contenir un bloc opcional "else". S'executa quan la condició és ```false```.

```
const correctYear = 2015
const responseYear = prompt('En quin any es va publicar l'especificació ECMAScript-2015?', '');
const isCorrect = correctYear == responseYear

if (isCorrect) {
    alert( 'Correcte!' );
} else {
    alert( 'T'has equivocat...' );
}
```
### **Clàusula ```else if```**

Si volem tenir més d'una opció de condicionals que actuïn diferent en cada cas.

```
const correctYear = 2015
const responseYear = prompt('En quin any es va publicar l'especificació ECMAScript-2015?', '');
const isEarlyYear = responseYear > correctYear
const tooLateYear = responseYear < correctYear

if (isEarlyYear) {
    alert( 'Massa aviat' );
} else if (tooLateYear) {
    alert( 'Massa tard' );
} else {
    alert( 'Correcte!' );
}
```
### **Operador condicional ```?```**

També conegut com a **ternari**. Ens ajuda a fer una operació condicionada d'una manera simple i més curta.
```
let result = condition ? value1 : value2;
```
```
const isAccessAllowed;
const age = prompt('Quants anys tens?', '');

if (age > 18) {
  isAccessAllowed = true;
} else {
  isAccessAllowed = false;
}

alert(isAccessAllowed);
```

```
const isAccessAllowed = age > 18 ? true : false;
```

👍 Quan executis l'operador ternari s'ha d'intentar mantenir l'expressió el més simple possible i no perdre la llegibilitat.

Exemple:
```
const isRunning = true

if (isRunning) {
    stop()
} else {
    run()
}

isRunning ? stop() : run()
```

👍 Prioritza les condicions assertives, ens ajuda a millorar la llegibilitat de la condicional. Les frases afirmatives solen ser més fàcils d'entendre que les negatives.

Exemple:
```
1 //Negativa
2 if(!canNotFormat){
3    format()
4 }
6
7 //Positiva
8 if(canFormat){
9    format()
10}
```