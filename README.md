# Laboratoire 08-A

Dans ce laboratoire, vous allez reprendre l'application de la galerie de photos avec l'API implémentée dans le laboratoire 07, et ajouter du code *frontend* en JavaScript pour utiliser cette API.

Vous remarquerez l'inclusion d'un dossier `public` dans le dépôt. Plusieurs projets Web utilisent un tel dossier pour y stocker des fichiers statiques qui seront téléchargés directement par le navigateur (par exemple, des fichiers `.js`, `.css`, des images, etc). Dans notre cas, un sous-dossier `js` contient les fichiers JavaScript que vous modifierez dans le cadre du laboratoire. Les fichiers `public/js/etape1.js` et `public/js/etape2.js` sont chargés à l'aide de balises `<script>` présentes dans toutes les vues de l'application. Vous trouverez ces balises dans la fonction `generateHTMLHeader()` du fichier `helpers.php`.

## Console du navigateur

Tout navigateur Web récent possède une console que vous pouvez ouvrir et dans laquelle le code JavaScript peut écrire. Sur Firefox et sur Chrome, on accède à cette console en appuyant sur la touche **F12**, puis en cliquant sur l'onglet `Console`. Lorsque du code JavaScript appelle la fonction `console.log` en lui passant du texte, celui-ci s'affiche dans la console.

> **CONSEIL:** Faites **CTRL+F5** entre vos tests pour vous assurer que vos scripts s'actualisent correctement.

## Étape 1

Complétez le code du fichier `public/js/etape1.js` afin de tester toutes vos routes d'API. Utilisez des `console.log` pour valider vos résultats.

Voici un rappel des routes d'API que vous avez implémentées dans le laboratoire 07:

* `GET api/albums`
* `GET api/albums/{idAlbum}`
* `POST api/albums`
* `PUT api/albums/{idAlbum}`
* `DELETE api/albums/{idAlbum}`
* `GET api/albums/{idAlbum}/photos`
* `POST api/albums/{idAlbum}/photos`
* `DELETE api/albums/{idAlbum}/photos/{idPhoto}`

Vous ne voudrez probablement pas exécuter les routes de modification (méthodes `POST`, `PUT` et `DELETE`) plus d'une fois. Vous pouvez donc les mettre en commentaire une fois que vous avez validé leur fonctionnement.

## Étape 2

