# INTERACCIÓ

##  **Funcions del navegador**
Si fem servir el navegador com a entorn de demostració, podem utilitzar algunes funcions per interactuar amb l'usuari.

🚨 Important!
> Aquestes funcions són pròpies del navegador.
> Escriu window a la consola del navegador i podràs veure totes les funcions que conté i podem fer servir.
>
> Exemple:
>
> ```js
> window.open() // obre una nova finestra del navegador
> window.document // és l'html de l'actual finestra
> window.location // l'url de pàgina actual
> ```


### **Console**

L'objecte console, ens permet accedir a la consola del navegador. La consola es fa servir com a eina per la programació per ajudar a fer comprovacions mentre escrivim codi.

S'accedeix des d'una finestra del navegador prenent el botó dret i seleccionant l'opció d'inspecció. S'obrirà un apartat on trobem les eines de desenvolupament, i una d'elles és la consola.

```js
window.console.log("Hola")
console.log('hello world!')
console.error('this is my error message')
console.clear()
```

Pots veure molts més mètodes de console aquí. [L'objecte console](https://dev.to/duxtech/tipos-de-objetos-console-en-javascript-parte-i-5ajb#:~:text=%F0%9F%98%8E-,El%20objeto%20window%20y%20console,js.&text=Ambos%20son%20equivalentes%2C%20pero%20siempre%20se%20usa%20la%20forma%20breve.)

### **Alert**

Ensenya un missatge mitjançant un pop-up i espera a l'usuari que premi OK.

```js
window.alert('hello world!')

alert("Hello")

```

### **Prompt**

La funció ```prompt``` accepta rebre 2 arguments.  

```js

const result = window.prompt(title, [default])

const result = prompt(title, [default])
```

Mostra una finestra pop-up amb un missatge de text, un camp d'entrada per l'usuari i els botons OK/Cancel.

**title**
El text que s'ensenya a l'usuari.

**default**
Un paràmetre opcional, el valor inicial a l'input.

**OK**
El valor introduït a l'input serà guardat com a resultat.

**Cancel**
El valor guardat com a resultat serà ```null```.

```js
const anys = prompt('Quants anys tens?', 100)

alert(`Tens ${anys} anys!`) // Tens 100 anys!!

```

### **Confirm**

La funció de ```confirm``` mostra una finestra modal amb una pregunta i dos botons: OK i Cancel.

El resultat és ```true``` si es prem OK i ```false``` en cas contrari.

```js
const result = window.confirm(pregunta)
const result = confirm(pregunta);
```

**pregunta**
La pregunta que s'ensenya a l'usuari.

```js
let isOver18 = confirm("Ets major d'edat?")

alert( isOver18 ) // true si selecciona OK, false si selecciona cancel
```

### 📚 Recursos
Els mètodes més utilitzats de l'[objecte window](https://desarrolloweb.com/articulos/827.php)

##  **Interactuar amb l'HTML**

L'objecte ```document``` (DOM) és el contingut de la finestra, és a dir, l'html de la web.

Si es vol accedir a qualsevol element d'una pàgina HTML, sempre hem d'accedir al DOM.

```js
window.document.write('hello world!') // veurem a l'html hello world
```

La funció ```document.getElementById(id)```ens permet rebre l'element html que conté aquest **id**.

### **Introduir text a un element html: innerHTML**

Un cop tenim aquest element, el podem modificar, per exemple afegint a la propietat ```innerHTML``` el valor que vulguem.

Exemple:

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            document.getElementById("demo").innerHTML = "Hola a tothom"
        </script>
    </head>
    <body>
        <h1>Exemple JavaScript</h1>
        <p id="demo"></p>
    </body>
</html>
```

### **Recuperar valor d'un element input html: value**

També podem recuperar el valor d'un element html. Perquè l'usuari pugui introduir un valor, tenim el tag ```<input>``` que mostra a l'usuari una capça on podrà introduir un valor. Aquest el podem recuperar accedint a la propietat ```value``` de l'element html recuperat per ```document.getElementById(id)```.

```html
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

### **Controlar accions de l'usuari amb button**
Quan treballem amb la interacció de l'usuari mitjançant en DOM, molts cops em de controlar **quan** volem recuperar elements html mitjançant l'id. Per això, un recurs que tenim és afegir un ```<button>``` amb una acció ```onclick``` que executarà una funció. Dins d'aquesta funció podem afegir l'acció que volem que s'executi.

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
        function saveName () {
            const valueUser = document.getElementById("name-input").value
            document.getElementById("name-message").innerHTML = 'Benvingut/da ' + valueUser
            console.log(valueUser) //el valor dins de l'input
        }
        </script>
    </head>
    <body>
        <h1>Exemple JavaScript</h1>

        <p id="name-message"></p>

        <p>Introdueix el teu nom</p>
        <input id="name-input">

        <button onclick="saveName()">
    </body>
</html>
```

🚨 Important!
> Tots els valors que recollim de l'usuari són strings.
>
> Exemple amb html:
>
> ```html
> <!DOCTYPE html>
> <html>
>     <head>
>         <script>
>             const num = document.getElementById("num-input").value
>             console.log(typeof num) //'string'
>             const valueNumber = Number(num)
>         </script>
>     </head>
>     <body>
>         <h1>Exemple JavaScript</h1>
>         <input type='number' id="num-input"> <!-- El input és de tipus number, però només com aparença -->
>     </body>
> </html>
> ```
>
> Exemple amb prompt:
>
> ```js
> const value = prompt('Introdueix la teva edat')
> console.log(typeof value) // 'string'
> const valueNumber = Number(value)
> ```

### 📚 Recursos

[Què és el DOM?](https://es.wikipedia.org/wiki/Document_Object_Model)

