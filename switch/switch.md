# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Switch**

Una declaració de ```switch``` pot reemplaçar múltiples comprovacions ```ìf```.

Ofereix una forma més descriptiva de **comparar un valor amb múltiples variants**.

```switch``` te un o més ```case``` blocs i un ```default``` opcional.

```
let a = 2 + 2;

switch (a) {
  case 3: // if( a === 3 )
    alert( 'Massa petit' );
    break;
  case 4: // if( a === 4 )
    alert( 'Exacte!' );
    break;
  case 5: // if( a === 4 )
    alert( 'Massa gran' );
    break;
  default: // else
    alert( "No conec aquest valor" );
}
```

- El valor dins de la **sentència** ```switch``` és comparat de forma estricta amb el valor de cada ```case```.

- Si la igualtat és trobada, executa el codi que correspon a aquest case fins que trobi ```break```.

- Si no es troba cap coincidència, executarà el codi dins del ```default```.

🚨
> - Es poden agrupar més d'un ```case``` quan volem que s'executi el mateix codi en ```case``` diferents.

Exemple:

```
const browser = prompt('Quin navegador utilitzes?')
switch (browser) {
  case 'Edge':
    console.log( "Ja tens l'Edge!!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'D'acord, també admetem aquests navegadors' );
    break;

  default:
    console.log( 'Esperem que aquesta pàgina es vegi bé!' );
}
```