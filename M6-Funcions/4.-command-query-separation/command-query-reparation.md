# COMMAND-QUARY SEPARATION (CQS)

El principi de disseny **Command-Query Separation**, té com a idea fonamental tractar de dividir les funcions d'un sistema en dues categories clarament separades:

• **Consultes (queries)**: són funcions pures que respecten el principi de transparència referencial, és a dir, tornen un valor i no alteren l'estat del sistema. Sempre tornen un valor.

Exemple:

```js
function sum (n1, n2) {
    return n1 + n2
}

const result = sum(2, 5)
```

• **Comandes (commands)**: són funcions que canvien l'estat intrínsec del sistema, és a dir, generen un side effect. També poden ser coneguts com a modificadors (modifiers) o mutadors (mutators). No haurien de tornar cap valor (void).

Exemple:

```js
function printByAlert(message) {
    alert(message)
}
printByAlert('hello world!')
```

En aquest cas, la funció no retorna cap valor, sinó que genera un efecte secundari, mostra un pop-up a la finestra del navegador.

Aquest principi ens diu que hem de separar clarament les funcions que realitzen comandes dels que realitzen consultes. Això ens permetrà fer un codi possiblement reutilitzable, definirclarament que és el que fa la funció i obtenir un codi més robust.