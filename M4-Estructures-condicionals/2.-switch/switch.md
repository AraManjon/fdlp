# SWITCH

Una declaració de ```switch``` pot reemplaçar múltiples comprovacions ```ìf```.

Ofereix una forma més descriptiva de **comparar un valor amb múltiples variants**.

```switch``` té un o més ```case``` blocs i un ```default``` opcional.

Exemple:

```js
let language = 'EN'

switch (language) {
  case 'EN': // if( language === 'EN' )
    console.log( 'hello' )
    break // surt de la comprovació
  case 'IT': // else if( language === 'IT' )
    console.log( 'ciao' )
    break // surt de la comprovació
  case 'FR': // else if( language === 'FR' )
    console.log( 'bonjour' )
    break // surt de la comprovació
  case 'CAT': // else if( language === 'CAT' )
    console.log( 'hola' )
    break // surt de la comprovació
  default: // else
    console.log( 'No entenc el teu idioma!' )
}
```

Exemple amb nombres:

```js
const month = Number(prompt('Introdueix el mes actual'))

switch (month) {
  case 1: // if (month === 1)
    console.log( 'primer trimestre' )
    break
  case 2:
    console.log( 'primer trimestre' )
    break
  case 3:
    console.log( 'primer trimestre' )
    break
  case 4:
    console.log( 'segon trimestre' )
    break
  case 5:
    console.log( 'segon trimestre' )
    break
  case 6:
    console.log( 'segon trimestre' )
    break
  case 7:
    console.log( 'tercer trimestre' )
    break
  case 8:
    console.log( 'tercer trimestre' )
    break
  case 9:
    console.log( 'tercer trimestre' )
    break
  case 10:
    console.log( 'quart trimestre' )
    break
  case 11:
    console.log( 'quart trimestre' )
    break
  case 12:
    console.log( 'quart trimestre' )
    break
  default: 
    console.log( 'El mes introduït no és correcte' )
}
```

- El valor dins de la **sentència** ```switch``` és comparat de forma estricta amb el valor de cada ```case```.

- Si la igualtat és trobada, executa el codi que correspon a aquest case fins que trobi ```break```.

- Si no es troba cap coincidència, executarà el codi dins del ```default```.

🚨 Important!
> Es poden agrupar més d'un ```case``` quan volem que s'executi el mateix codi en ```case``` diferents.
> 
> Exemple:
> 
> ```js
> const month = Number(prompt('Introdueix el mes actual'))
> 
> switch (month) {
>   case 1:
>   case 2:
>   case 3:
>     console.log( 'primer trimestre' )
>     break
>
>   case 4: case 5: case 6:
>     console.log( 'segon trimestre' )
>     break
> 
>   case 7: case 8: case 9:
>     console.log( 'tercer trimestre' )
>     break
> 
>   case 10: case 11: case 12:
>     console.log( 'quart trimestre' )
>     break
> 
>   default: 
>     console.log( 'El mes introduït no és correcte' )
> }
> ```