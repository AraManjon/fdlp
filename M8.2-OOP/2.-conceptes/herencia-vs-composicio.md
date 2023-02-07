# HERENCIA vs. COMPOCICIÓ

Tant l'herència com la composició són dues tècniques molt comunes aplicades a la reutilització de codi. Com sabem, l'herència permet definir una implementació des d'una classe pare, mentre que la composició es basa a acoblar diferents objectes per obtenir una funcionalitat més complexa.

Optar per la composició davant de l'herència ens ajuda a mantenir cada classe encapsulada i centrada en una sola tasca (principi de responsabilitat), afavorint-ne la modularitat i evitant l'acoblament de dependències. 

Un alt acoblament no només ens obliga a arrossegar amb dependències que no necessitem, sinó que a més a més limita la flexibilitat del nostre codi a l'hora d'introduir canvis. Això no vol dir que mai hagis de fer servir l'herència. Hi ha situacions en què l'herència casa molt bé, la clau és saber diferenciar-les.

Exemple herència:

```js
class Purchase {
    #amount

    constructor(amount) {
        this.#amount = amount
    }

    getAmount () {
        return this.#amount
    }

    getAmountWithVAT () {
        return this.getAmount() * 1.21
    }
}

class PurchaseReducedVAT extends Purchase {

    constructor(amount) {
        super(amount) 
    }

    getAmountWithVAT () {
        return this.getAmount() * 1.10
    }
}

class PurchaseWithoutVAT extends Purchase {

    constructor(amount) {
        super(amount) 
    }

    getAmountWithVAT () {
        return this.getAmount()
    }
}
```

Exemple composició:

```js
class Purchase {
    #amount
    #VAT

    constructor(amount, VAT) {
        this.#amount = amount
        this.#VAT = VAT
    }

    getAmount () {
        return this.#amount
    }

    getAmountWithVAT () {
        return this.#VAT.getAmountWithVAT(1.21)
    }
}

class ReducedVAT {
    getAmountWithVAT (amount) {
        return amount * 1.10
    }
}

class WithoutVAT {
    getAmountWithVAT (amount) {
        return amount
    }
}
```

📚 Recursos:
> Aquí trobaràs més informació per poder diferència quan fer ús en cada cas. 
[herencia-vs-composicion](https://devexperto.com/herencia-vs-composicion/)