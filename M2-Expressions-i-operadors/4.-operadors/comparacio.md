# COMPARACIÓ

Tots els operadors de comparació **retornen un valor boolean**:

- **true**: significa "sí", "correcte" o "la veritat".

- **false**: significa "no", "incorrecte" o "no és la veritat".

| comparació   |   expressió |
|--------------|-------------|
|Major/menys que |  ```a > b, a < b```
|Major/menys que o igual |   ```a >= b, a <= b```
|Igual |    ```a === b```
|No és igual |    ```a !== b```

Exemples:

```js

// Major que
3 > 1 // true 
1 > 3 // false
8 > 8 // false

// Menor que
5 < 1 // false
1 < 5 // true
7 < 7 // false

// Major o igual que
5 >= 5 // true
1 >= 9 // false

// Menor o igual que
3 <= 3 // true
7 <= 3 // false

// Igual que

2 === 2 // true 
2 === 9 // false 


// No igual

2 !== 1 // true
2 !== 2 // false
```

🚨 Important!

> Els strings són comparats lletra per lletra.
>
> Exemple:
>
> ```js
> 'Z' > 'A' // true
> 'Glo' > 'Gle' // true
> 'Gloa' > 'Glez' // true
> 'Bee' > 'Be' // true
> ```

👍 Consell:

> Per comprovar la igualtat de dos valors existeix l'opció de fer servir 2 operadors en comptes de 3, ```==``` o ```!=```. Es recomana no fer ús d'aquesta comparació, ja que és només de valor i no de tipus i valor.
>
> Exemple comparació només de valor:
> 
> ```js
> 0 == false // true
> 1 == true // true
> 0 == '' // true
> '' == false // true
> 10 == '10' // true
> ```
> 
> Exemple comparació de valor i tipus:
>
> ```js
> 0 === false // false
> 10 === '10' // false
> true === 1 // false
> ```
