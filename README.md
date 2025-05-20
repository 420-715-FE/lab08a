# Laboratoire 08-A

Dans ce laboratoire, vous allez reprendre l'application de la galerie de photos avec l'API implémentée dans le laboratoire 07, et ajouter du code *frontend* en JavaScript pour utiliser cette API.

Vous remarquerez l'inclusion d'un dossier `public` dans le dépôt. Plusieurs projets Web utilisent un tel dossier pour y stocker des fichiers statiques qui seront téléchargés directement par le navigateur (par exemple, des fichiers `.js`, `.css`, des images, etc). Dans notre cas, un sous-dossier `js` contient les fichiers JavaScript que vous modifierez dans le cadre du laboratoire. Les fichiers `public/js/etape1.js` et `public/js/etape2.js` sont chargés à l'aide de balises `<script>` présentes dans toutes les vues de l'application. Vous trouverez ces balises dans la fonction `generateHTMLHeader()` du fichier `helpers.php`.
