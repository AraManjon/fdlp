# ABSTRACCIÓ

L'abstracció significa mostrar només la informació essencial i amagar-ne els detalls. L'abstracció de dades fa referència a proporcionar només informació essencial sobre les dades al món exterior, ocultant els detalls de fons o la implementació.

S'aconsegueix mitjançant classes abstractes. A JavaScript no existeixen les interfícies, per tant, veiem un exemple amb TypeScript per veure un ús i potencial d'aquest concepte.

```ts
interface Figure {
    getArea: () => number;
}

class Rectangle implements Figure {
    private width: number
    private height: number

    constructor (width: number, height: number) {
        this.width = width
        this.height = height
    }

    getArea () : number {
        return this.width * this.height
    }
}

class Square implements FigureFigure {
    private length: number

    constructor (length: number) {
        this.length = length
    }

    getArea() : number  {
        return this.length * this.length
    }
}

const figure = new Figure() // throw error
const rectangle = new Rectangle(4, 5)
rectangle.getArea() // 20
```