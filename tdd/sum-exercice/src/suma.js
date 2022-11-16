import { validateNum } from "./validateNum";

export function suma(a, b) {
    
    validateNum(a)
    validateNum(b)

    const result = a + b
    return result;
}