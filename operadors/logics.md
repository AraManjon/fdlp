# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

##  **Lògics**

// TODO

|| (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

### **```||``` (OR)**

Si algun dels seus arguments és ```true```, retorna ```true```, en cas contrari retorna ```false```.

```
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
```

```
const hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'L'oficina és tancada.' );
}
```

🚨
> - Avalua els operands d'esquerra a dreta.
> - Per a cada operand, el converteix en boolean. Si el resultat és ```true```, s'atura i retorna el valor original d'aquest operand.
> - Si s'han avaluat tots els operands (és a dir, tots eren falsos), retorna l'últim operand.

Exemple:

```
console.log( 1 || 0 ); // 1 

console.log( null || 1 ); // 1
console.log( null || 0 || 1 ); // 1

console.log( undefined || null || 0 ); // 0

console.log('' || 'hola'); // hola
```

### **```&&``` (AND)**

A la programació clàssica, AND retorna ```true``` si els dos operands són veritables i ```false``` en cas contrari:

```
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
```

```
const hour = 12;
const minute = 30;

if (hour === 12 && minute === 30) {
  console.log( 'Són les 12:30' );
}
```

🚨
> - Avalua els operands d'esquerra a dreta.
> - Per a cada operand, el converteix en un boolean. Si el resultat és ```false```, s'atura i retorna el valor original d'aquest operand.
> - Si s'han avaluat tots els operands (és a dir, tots eren veritables), retorna l'últim operand.

Exemple:

```
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5
console.log( null && 5 ); // null
console.log( 0 && "qualsevol valor" );
```

### **```!``` (NOT)**

L'operador accepta un sol argument i fa el següent:

1. Converteix l'operand al tipus boolean: true/false.
2. Retorna el valor invers.

```
console.log( !true ); // false
console.log( !0 ); //true
```

```
const username = 'Pepito'

if (!username) {
    alert('Indica el teu nom d'usuari')
}
```
Un doble ```!!``` (NOT) de vegades s'utilitza per convertir un valor al tipus boolean:

```
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
```

### **```??``` (Nullish)**

És una nova incorporació del llenguatge.

Tracta ```null``` i ```undefinded``` de la mateixa manera.

El resultat a ?? b és:

si es defineix a, aleshores a,
si a no està definit, aleshores b.

En altres paraules, ```??``` retorna el primer argument si no és null/undefinded. En cas contrari, el segon.

result = (a !== null && a !== undefined) ? a : b;

🚨
> ?? retorna el primer valor "definit" (entenen definit com no ```undefined``` o ```null```).

```
let result = 0
let number = null;

if (number ?? false) {
    alert('has d'intrroduir algún número')
} else {
    result += number;
}
```