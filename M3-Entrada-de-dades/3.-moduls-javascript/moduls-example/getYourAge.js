import { retrieveAge } from './retrieveAge.js';
import { validateAge } from './validateAge.js';

export function getYourAge() {
	try {
		const age = retrieveAge();

		validateAge(age);

		alert('Benvingut/da');
	} catch (error) {
		alert('Introdueix una edat entre 0 i 120');
		console.error(error.message)
	}
}
