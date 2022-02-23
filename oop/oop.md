# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Programació orientada a objectes OOP**

És un paradigma de la programació on els objectes representen les entitats, contenen dades y codi.

Javascript es un llenguatge multiparadigma, això vol dir que pot utilitzar la combinació de diferents paradigmes.

### **Objectes: dades i codi**

Les dades  que estan dins d'una funció es coneixen com a propietats. 

Les funcions que estan dins d'una propietat dins d'un objecte, és un mètode.

```
const persona = { name: 'My Name', sayHello: function(){ console.log('hola') }}

persona.sayHello() // hola

//sayHello és un mètode de persona
```

```
console.log('Hello World!')

//log és un mètode de console
```

### **A Javascript tot són objectes**

Molts cops es descriu Javascript com un llenguatge orientat a objectes basat en prototips. És a través de prototips que s'executen els mecanismes d'herència. Els objectes poden tenir un objecte prototip, que actua com objecte plantilla del qual hereta mètodes i propietats.

#### **Funcions: ciutadans de primera classe**

typeof instance === 'function'
instance instanceof Object

Si un llenguatge de programació té la capacitat de tractar les funcions com a valors, passar-les com arguments i retornar la funció d'una altra funció, es diu que aquest llenguatge té funcions de primera classe.

Les funcions a Javascript tenen aquestes capacitats:

Exemple: 
```
const greet = function() {
    console.log("Welcome!")
}
greet() "Welcome"
```

```
function teacher(){
    return "Teacher"
}
  
function greet(user){
    console.log("Welcome", user())   
}
  
// Prints "Welcome Teacher"
const message = greet(teacher) // "Welcome Teacher"
```

```
const greet = function(){
    return function(){
        return "Welcome!"
    }
}
const message = greet()
console.log(message) //"Welcome"
```

Notes:
> 🚨 Les funcions que retornen una altra funció es coneixen com a funcions d'ordre superior (High Orrder Functions).

### **OOP**

En la programació orientada a objectes es combinen un grup de valors i funcions dins d'una unitat. A aquesta unitat se la coneix com a objecte. 

Exemple implentació procedimental:
```
let anualSalary = 30000
let months = 12

function getSalary (anualSalary, months) {
    return anualSalary / months
}
```

Exemple implentació OOP:
```
let employee = {
    anualSalary: 30000,
    months: 12,
    getSalary: function getSalary () {
        return this.anualSalary / this.months
}
```

#### **This**

La paraula reservada ```this``` a Javascript ens serveix per fer referència a l'objecte que conté el mètode que l'invoca.

### 📚 Recursos
[Programació funcional](https://softwarecrafters.io/javascript/introduccion-programacion-funcional-javascript)