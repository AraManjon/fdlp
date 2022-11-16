import { retrieveAge } from "./retrieveAge.js";
import { validateAge } from "./validateAge.js";

export function getYourAge() {

    const age = retrieveAge()

	validateAge(age);

	alert('Welcome');
}