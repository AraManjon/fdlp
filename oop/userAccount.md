# UserAccount

Ens demanen crear una aplicació per crear, modificar, veure i eliminar comptes d'usuaris.

La clase **UserAccount** es construirà amb els següents atributs: username, email, password o languagePreferences. 

Com a mètodes només haurà de tenir els getters (excepte el password) i setters propis de la classe i un mètode anomenat validateUserAccount(). Aquest mètode rebrà com a paràmetres dos valors, un correspon a un email i l'altre a un password. Aquests arguments seran comparats amb l'email i el password que ja conté l'objecte en les seves propietats. El mètode validarà que els dos valors siguin correctes i retornarà true o false.

**C**reateAccunt haurà de demanar que l'usuari introdueixi per pantalla un email, un password i un repeat password. 

🚫 El email a d'estar en un format correcte.
🚫 No ha d'existir cap compte amb aquest email.
🚫 El password i el repeat password han de ser idèntics.

**U**pdateAccount per accedir a aquesta opció, s'haurà de validar aquest compte. En el cas que es compleixi la validació, li demanarem si vol modificar l'username, email, password o languagePreferences.

**R**eadAccount per accedir a aquesta opció, s'haurà de validar aquest compte. En el cas que es compleixi la validació, li mostrarem les dades del compte excepte el password.

**D**eleteAccount per accedir a aquesta opció, s'haurà de validar aquest compte. En el cas que es compleixi la validació, l'eliminarem mostrarem un missatge conforme s'ha eliminat correctament.

✅ Validar el compte: Demanarem a l'usuari que introdueixi l'email i el password, en el cas que no existeixi cap compte amb aquest email o el password no sigui correcte, li mostrarem un missatge de 'L'email o el password que has escrit no són correctes'.











