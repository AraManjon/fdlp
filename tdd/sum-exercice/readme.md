FIRST STEP:
1- crear carpeta proyecto
2- hacer un archivo package.json
3- meter dentro del archivo package.json:

```
{
  "scripts": {
    "test": "jest"
  },

  "devDependencies": {
    "jest": "^29.3.1",
    "@babel/preset-env": "^7.17.10"
  }
}
```

4- dentro de la carpeta del proyecto, en la terminal escribir npm install. Este comando crea la carpeta node_modules con las librerias intaladas.

5- El archivo .babelrc nos permite utilizar el modo modules nuevo en el proyecto (import y exports)

6- Crear archivos suma.js i suma.test.js con el codigo

7- Escribir script npm test

