# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Interacció**

###  **Funcions del navegador**
Si fem servir el navegador com a entorn de demostració, podem utilitzar algunes funcions per interactuar amb l'usuari.

Notes:
> Aquestes funcions són pròpies del navegador.

> Escriu window a la consola del navegador i podràs veure totes les funcions que conté i podem fer servir.


#### **Alert**

Ensenya un missatge i espera a l'usuari que premi OK.

```
alert("Hello")
```

#### **Prompt**

La funció ```prompt``` accepta rebre 2 arguments.

```
const result = prompt(title, [default]);
```

Mostra una finestra modal amb un missatge de text, un camp d'entrada per l'usuari i els botons OK/Cancel.

**title**
El text que s'ensenya a l'usuari.

**default**
Un parametre opcional, el valor inicial a l'input.

**OK**
El valor introduït a l'input serà guardat com a resultat.

**Cancel**
El valor guardat com a resultat serà null.

```
const anys = prompt('Quants anys tens?', 100);

alert(`Tens ${anys} anys!`); // Tens 100 anys!!

```

#### **Confirm**
La funció de ```confirm``` mostra una finestra modal amb una pregunta i dos botons: OK i Cancel.

El resultat és ```true``` si es prem OK i ```false``` en cas contrari.

```
const result = confirm(pregunta);
```
**pregunta**
La pregunta que s'ensenya a l'usuari.

```
let isOver18 = confirm("Ets major d'edat?");

alert( isOver18 ); // true si selecciona OK 
```

###  **Interactuar amb l'HTML**

L'objecte document és la pàgina web.

Si es vol accedir a qualsevol element d'una pàgina HTML, sempre hem d'accedir al DOM.

La funció ```document.getElementById(id)```ens permet rebre l'element html que conté aquest **id**.

Un cop tenim aquest element, el podem modificar, per exemple afegint a la propietat ```innerHTML``` el valor que vulguem.

```
<!DOCTYPE html>
<html>
    <head>
        <script>
            document.getElementById("demo").innerHTML = "Hola tothom"
        </script>
    </head>
    <body>
        <h1>Exemple JavaScript</h1>
        <p id="demo"></p>
    </body>
</html>
```