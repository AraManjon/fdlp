# MÒDULS JAVASCRIPT

Per poder utilitzar els arxius .js com a mòduls i que puguin relacionar-se entre ells, segueix els següents passos:

1.- Crear l'arxiu .js importat a l'html com type module.

```js
<script src="index.js" type="module"></script>
```

2.- L'event onclick dels botons de l'html ja no poden cridar a la funció js directament, hem d'afegir-li l'acció click del botó en el js.

Per tant, el botó tindrà un id, i en el .js ens emportarem aquest element.

Al html:
```html
<button id="age-button">SEND</button>
```

Al index.js:
```js
document.getElementById('age-button').addEventListener('click', getYourAge)
```

3.- ```getYourAge``` és una funció que es troba en un arxiu a part. Ex: getYourAge.js

Per poder fer referència a aquesta funció en l'index.js, haurem d'importar-la.

Al index.js:
```js
import { getYourAge } from "./getYourAge.js";
```

Per poder ser importada, hem d'indicar que la funció getYourAge és exportable utilitzant la paraula reservada export davant de la funció.

A l'arxiu getYourAge.js:

```js
export function getYourAge() {

    const age = retrieveAge()

	validateAge(age);

	alert('Welcome');
}
```

4.- Utilitzar mòduls ens permetrà separar cada funció en un arxiu independent per cadascuna. D'aquesta manera tenim codi més mantenible i reutilitzable.

### 📚 Recursos

[ESM Javascript Docu](https://lenguajejs.com/javascript/caracteristicas/modulos-es6/)

[addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)