# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Interacció**

###  **Funcions del navegador**
Si fem servir el navegador com a entorn de demostració, podem utilitzar algunes funcions per interactuar amb l'usuari.

Notes:
> Aquestes funcions són pròpies del navegador.

> Escriu window a la consola del navegador i podràs veure totes les funcions que conté i podem fer servir.

#### **Console**

L'objecte console permet access a la consola del navegador.

```
window.console.log("Hola"); // Hola
console.log("Hola"); //Hola
```

[L'objecte console](https://dev.to/duxtech/tipos-de-objetos-console-en-javascript-parte-i-5ajb#:~:text=%F0%9F%98%8E-,El%20objeto%20window%20y%20console,js.&text=Ambos%20son%20equivalentes%2C%20pero%20siempre%20se%20usa%20la%20forma%20breve.)

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

### 📚 Recursos
Els mètodes més utilitzats de l'[objecte window](https://desarrolloweb.com/articulos/827.php)

###  **Interactuar amb l'HTML**

L'objecte ```document``` (DOM) és la pàgina web.

Si es vol accedir a qualsevol element d'una pàgina HTML, sempre hem d'accedir al DOM.

La funció ```document.getElementById(id)```ens permet rebre l'element html que conté aquest **id**.

#### **Introduir text: innerHTML**

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

#### **Recuperar valor: input**

També podem recuperar el valor d'un element html. Perquè l'usuari pugui introduir un valor, tenim el tag ```<input>``` que mostra a l'usuari una capça on podrà introduir un valor. Aquest el podem recuperar accedint a la propietat ```value``` de l'element html recuperat per ```document.getElementById(id)```.

```
<!DOCTYPE html>
<html>
    <head>
        <script>
            const valueUser = document.getElementById("name-input").value
            console.log(valueUser) //el valor dins de l'input
        </script>
    </head>
    <body>
        <h1>Exemple JavaScript</h1>
        <input id="name-input">
    </body>
</html>
```
#### **Controlar accions de l'usuari amb button**
Quan treballem amb la interacció de l'usuari mitjançant en DOM, molts cops em de controlar **quan** volem recuperar elements html mitjançant l'id. Per això, un recurs que tenim és afegir un ```<button>``` amb una acció ```onclick``` que executarà una funció. Dins d'aquesta funció podem afegir l'acció que volem que s'executi.


```
<!DOCTYPE html>
<html>
    <head>
        <script>
        function saveName () {
            const valueUser = document.getElementById("name-input").value
            console.log(valueUser) //el valor dins de l'input
        }
        </script>
    </head>
    <body>
        <h1>Exemple JavaScript</h1>
        <input id="name-input">
        <button onclick="saveName()">
    </body>
</html>
```

### 📚 Recursos

[Què és el DOM?](https://es.wikipedia.org/wiki/Document_Object_Model)

