# BREAK

Normalment, un loop continua mentre la condició és ```true``` i s'aturarà el bucle quan la condició sigui ```false```. 

Però podem forçar que s'acabi el bucle utilitzant la paraula ```break```.

Exemple: 

```js
let sum = 0;

while (true) {

  let value = Number(prompt("Enter a number", ''))

  if (!value) break

  sum += value

}
console.log( 'Sum: ' + sum )
```