# PRIMERA WEB

## **La nostra primera web**

### 📟 Des de la Terminal

1- Ens movem a la carpeta on volem crear la nostra primera web.

Commands:

> **ls** (Apple: ensenya el llistat d'arxius i subdirectoris del directori)

> **dir** (Windows: ensenya el llistat d'arxius i subdirectoris del directori)

> **cd** *path-carpeta* (Apple & Windows: per moure'ns entre carpetes)

> **mkdir** *nom-carpeta* (Apple & Windows: crear una carpeta)

> **cls** netejar terminal (Apple **clear**)

2- Creem un arxiu index.html i un arxiu index.js

> **touch** *nom-arxiu* (Apple: per crear un arxiu)

> **type nul >** *nom-arxiu* (Windows: per crear un arxiu)

🚨 Podem escriure ```ls``` (en Mac) o ```dir``` (en Windows) per poder veure el contigut de la carpetaa, ara ens sortiran els dos arxius creats, index.html i index.js

Notes:

> **rm** *nom-arxiu* (Apple & Windows: esborrar arxius)
> **rm -rf** *nom-carpeta* (Apple & Windows: esborrar carpetas)

> **fsutil file createnew** *nom-arxiu* **0** (Windows: una altre opció per crear un arxiu)

> **code .** ens obrirà el vsc des de la carpeta on estem situats

### Creem contingut a l'Html

![Exemple de com crear el contingut en un arxiu Html](./primer-html.png)

![Exemple de com crear el contingut en un arxiu Html](./primer-html-sintaxi.png)

### Carregar Javascript a l'Html

Dins del ```<head> </head>``` afegim ```<script></script>```

> De vegades també el podem trobar dins del body però just abans de tancar el tag.

Importem arxius .js:
```
<script src="index.js"></scrript>
```

I dins l'arxiu index.js és on afegirem el codi javascript ```console.log('hello world')```

En linea: 
```
<script>
    console.log('hello world')
</scrript>
```
