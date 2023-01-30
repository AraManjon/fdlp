# MÈTODES D'ARRAY: SORT, REVERSE

## **Mètodes per transformar l'ordre d'un array** 

### **SORT**

La crida al mètode ```sort``` ordena l'array al seu lloc, canviant l'ordre dels elements.

També retorna l'array ordenada, però el valor retornat normalment s'ignora, ja que es modifica el mateix array.

Example:

```js
let cities = ['Barcelona', 'Londres', 'Berlín', 'Roma']

cities.sort()

console.log(cities) // ['Barcelona', 'Berlín', 'Londres', 'Roma']
```

🚨 Important!
> 
>
> Els elements són ordenats com strings per defecte i pot tenir comportaments inesperats.
>
> Example:
>
> ```js
> let arr = [ 1, 2, 15 ]
>
> arr.sort()
>
> console.log( arr )  // 1, 15, 2
> ```
> 
> Per utilitzar el nostre propi criteri de reordenament, necessitem proporcionar una funció com a argument d'arr.sort().
> 
> La funció ha de comparar dos valors arbitraris, i tornar:
> 
> ```js
> function compare(a, b) {
>   if (a > b) return 1 // si el primer valor és major que el segon
>   if (a == b) return 0 // si els dos valors són iguals
>   if (a < b) return -1 // si el primer valor és menor que el segon
> }
> ```
>
> Exemple per comparar nombres:
>
>```js
> function compareNumeric(a, b) {
>   if (a > b) return 1
>   if (a === b) return 0
>   if (a < b) return -1
> }
> 
> let arr = [ 1, 2, 15 ]
> 
> arr.sort(compareNumeric)
> 
> console.log(arr) // 1, 2, 15
> ```

### **REVERSE**

El mètode ```reverse``` inverteix l'ordre dels elements a l'array original.

Exemple:

```js
let arr = [1, 2, 3, 4, 5]
arr.reverse()

console.log( arr ) // 5,4,3,2,1
```

🚨 Important!

> Inverteix els elements, però no els ordena.
> 
> Exemple:
>
> ```js
> let arr = [2, 5, 1, 6]
> arr.reverse()
> 
> console.log( arr ) // 6, 1, 5, 2
> ```