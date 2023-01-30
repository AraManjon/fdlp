# CONTINUE

Seria una versió més lleugera del ```break```, ja que no atura el loop però, si que fa que s'aturi la iteració en el bucle actual, obligant al bucle a iniciar-se.

Exemple: 

```js
for (let i = 0; i < 10; i++) {

  if (i % 2 === 0) continue

  console.log(i) // 1, 3, 5, 7, 9
}
```