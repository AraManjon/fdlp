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
    break; //surt de la comprobació
  case 4: // else if( a === 4 )
    alert( 'Exacte!' );
    break; //surt de la comprobació
  case 5: // else if( a === 4 )
    alert( 'Massa gran' );
    break; //surt de la comprobació
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
  const mes = prompt("Indica el mes ", "escriu un mes [1-12]");

  mes = Number(mes);

  let trimestre = null;
  switch (mes) {
    case 1:
    case 2:
    case 3:
      trimestre = 1;
      break;
    case 4: case 5: case 6:
      trimestre = 2;
      break;
    case 7: case 8: case 9:
      trimestre = 3;
      break;
    case 10: case 11: case 12:
      trimestre = 4;
      break;
  } 
  
  alert(`El trimestre del mes ${mes} és el ${trimestre} trimestre`);
```