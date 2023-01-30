# LOOPS: FOREACH

És un **mètode** de les arrays. És una manera de recórrer arrays de forma més funcional, sense escriure una estructura.

Sintaxi:

```js
array.forEach(function(element, index) {
    // element és cada valor de l'array
    // index és la posició del valor
    // intrucció per cada element de l'array
})
```

Exemple:

```js
const alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan']
let content = "Llistat d'alumnes:\n"

alumnes.forEach(function(alumne, position) {
    content += `${position} ${alumne} \n`
})

console.log(content)
/*
Llistat d'alumnes:
0  Pep 
1  Paco 
2  Aina 
3  Lluisa 
4  Joan 
*/
```