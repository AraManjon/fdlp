# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

###  **Comparació**
Tots els operadors de comparació retornen un valor boolean:

- **true**: significa "sí", "correcte" o "la veritat".

- **false**: significa "no", "incorrecte" o "no és la veritat".

| comparació   |   expressió |
|--------------|-------------|
|Major/menys que |  ```a > b, a < b```
|Major/menys que o igual |   ```a >= b, a <= b```
|Igual |    ```a === b```
|No és igual |    ```a !== b```

```
console.log( 2 > 1 );  // true 
console.log( 2 > 2 ); // false
console.log( 2 >= 2 ); // true
console.log( 2 === 1 ); // false 
console.log( 2 !== 1 ); // true
```

Els strings són comparats lletra per lletra.
```
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
```


🚨 Per comprovar la igualtat de dos valors també existeix amb ```==``` o ```!=```, en aquest cas no compara tipus, és per això que no es recomana fer servir.

```
console.log( 0 == false ); // true
console.log( 10 == '10' ); // true
```
```
console.log( 0 === false ); // false
console.log( 10 === '10' ); // false
```

### 📚 Recursos

Molts més exemples amb excepcions [aquí](https://javascript.info/comparison).
