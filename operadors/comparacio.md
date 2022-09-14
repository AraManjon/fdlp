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
2 > 1 // true 
2 > 2 // false
2 >= 2 // true
2 === 1 // false 
2 !== 1 // true
```

Els strings són comparats lletra per lletra.
```
'Z' > 'A' // true
'Glow' > 'Glee' // true
'Bee' > 'Be' // true
```

🚨 Per comprovar la igualtat de dos valors també existeix amb ```==``` o ```!=```, en aquest cas no compara tipus, és per això que no es recomana fer servir.

```
0 == false // true
10 == '10' // true
```
```
0 === false // false
10 === '10' // false
```

### 📚 Recursos

Molts més exemples amb excepcions [aquí](https://javascript.info/comparison).
