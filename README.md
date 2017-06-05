# Code Push

Lorsque vous développez une application mobile avec React Native, vous allez devoir passer par le store (AppStore ou PlayStore) un moment ou un autre pour partager votre application avec vos utilisateurs.

Une fois votre application à la portée de vos utilisateurs, vous allez forcément rencontrer tôt ou tard un bug de prod. Dans ce genre de moment, selon la gravité du bug, il peut être préférable d'éffectuer un rollback à la dernière version de votre application. Cependant, les différents stores ne fournissent pas les éléments dédiés à cela à l'heure actuelle.

En effet, que ce soit sur l'AppStore ou le PlayStore, vous serez obligé d'uploader le build de la version précédente pour effectuer ce "rollback". Et ainsi d'attendre que cette mise à jour soit effective. Cela peut prendre plusieurs heures pour le PlayStore à plusieurs jours pour l'AppStore).

Vous risquez donc, en cas de bug bloquant, de frustrer tous les prochains utilisateurs jusqu'à la prochaine version et générer ainsi des avis négatifs et mauvaises notes pour votre application.

Heureusement, il existe une solution à ce problème qui va vous permttre de mettre à jour votre application **sans passer par le store** qui est [CodePush](https://microsoft.github.io/code-push/).

## CodePush, un service

CodePush est un cloud service mis en avant par Microsoft qui offre aux développeurs React Native et Cordova, un moyen pour déployer des mises à jours directement sur le téléphone de leurs utilisateurs.

Cela fonctionne simplement par un système de repo, vous allez envoyer votre build JavaScript au service qui va faire la liaison avec l'application qui utilise le SDK fourni.

**Note:** CodePush permet de mettre à jour uniquement les éléments statiques à savoir le HTML, CSS, JavaScript et les images. Si vous modifiez un élément d'un module natif, vous serez dans l'obligation de passer par le store.