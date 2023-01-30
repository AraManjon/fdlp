# DIFERENCIA ENTRE ARRAYS I OBJECTES

##  **Arrays**

> Els objectes literals, ens permeten emmagatzemar col·leccions de valors amb keys. Per accedir o modificar al seu contingut, ho fem a partir de la ```keys```.

Exemple:

```js
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    cilindrada: 120,
}

console.log(car.model) // Ibiza

car.turbo = true

console.log(car.turbo) // true
```

Però existeixen casos en què volem emmagatzemar valors ordenats i poder accedir a ells segons el **ordre** en la llista. En aquest cas faríem servir les **Arrays**.

Exemple:

```js
const cities = ['Barcelona', 'Londres', 'Berlín', 'Roma']

console.log(cities[0]) // Barcelona
console.log(cities[1]) // Londres
console.log(cities[2]) // Berlín
console.log(cities[3]) // Roma

console.log(cities.length) // 4
cities[4] = 'Paris'

console.log(cities) // 'Barcelona', 'Londres', 'Berlín', Roma', 'Paris'
```

🚨 Important!
> Els objectes no tenen cap funció on puguem guardar o recuperar una propietat en una posició concreta.



