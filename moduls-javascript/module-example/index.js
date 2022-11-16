import { calculate } from "./calculate.js";
import { retrieveAge } from "./retrieveAge.js";

document.getElementById('button-age').addEventListener('click', () => {
        const age = retrieveAge();
        calculate(age);
    })