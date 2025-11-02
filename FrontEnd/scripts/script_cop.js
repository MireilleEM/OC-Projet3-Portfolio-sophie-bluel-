
/*// Fonction pour récupérer et afficher les projets
async function chargerProjets() {
    try {
        const response = await fetch(`http://localhost:5678/api/works`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const projets = await response.json();

        // On récupère le conteneur gallery
        const sectionGallery = document.querySelector(".gallery");

        // Boucle for pour parcourir chaque projet
        for (let i = 0; i < projets.length; i++) {
            const projet = projets[i];

            // Création des éléments DOM pour chaque projet
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = projet.imageUrl;
            img.alt = projet.title;
            const figcaption = document.createElement("figcaption");
            figcaption.textContent = projet.title;

            // Assemblage de la figure
            figure.appendChild(img);
            figure.appendChild(figcaption);

            // Ajout de la figure à la galerie
            sectionGallery.appendChild(figure);
        }

    } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
    }
}

// Appel de la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", chargerProjets);
*/


// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

// autre méthode:
let div = `
    <div>
        <h1>${contenuTitre}</h1>
        <p>${contenuParagraphe}</p>
    </div>
    `;
body.innerHTML = div

/*<button id="monBouton">Cliquez-moi !</button>*/
let monBouton = document.getElementById("monBouton");
    monBouton.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le bouton")
    });

    /* avec une fonction fléchée*/
    monBouton.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
});
monBouton.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
});
document.addEventListener('keydown', (event) => {
    console.log(event.key);
});
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

article.prix < 35 ? "€" : "€€€"

// …
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// ...
document.body.appendChild(prixElement);

/* Fournir une valeur par défaut grâce à l’opérateur nullish
L’opérateur nullish s’utilise lorsque vous pensez avoir une information dans une variable mais que finalement, il n’y en a pas.

Ça peut arriver quand, concrètement ? 🤨

Eh bien, quand une valeur est null, et donc qu’elle n’a pas de valeur, ou bien lorsqu’elle est undefined, et donc qu’elle n’est pas définie. Dans notre cas, la pièce automobile “Balai d’essuie-glace” n’appartient à aucune catégorie. On aimerait le préciser entre parenthèses lorsque c’est le cas.

L’opérateur s’écrit avec deux ?? sous la forme suivante :

expression à tester ?? valeur de substitution

On écrira donc :*/
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

for (let i = 0; i < pieces.length; i++) {

// Récupération de l'élément du DOM qui accueillera les fiches
const sectionFiches = document.querySelector(".fiches");
// Création d’une balise dédiée à une pièce automobile
const pieceElement = document.createElement("article");
// On crée l’élément img.
const imageElement = document.createElement("img");
// On accède à l’indice i de la liste pieces pour configurer la source de l’image.
imageElement.src = pieces[i].image;
// Idem pour le nom, le prix et la catégorie...

// On rattache la balise article à la section Fiches
sectionFiches.appendChild(pieceElement);
// On rattache l’image à pieceElement (la balise article)
pieceElement.appendChild(imageElement);
// Idem pour le nom, le prix et la catégorie...
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    // ...
});

boutonTrier.addEventListener("click", function () {
    pieces.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(pieces);
});

/* 
Quand j’écris ton code, les fiches produits restent dans le même ordre. 
Pourquoi l’écran ne change pas ?
La fonction sort modifie la liste qu’elle réordonne “en place” (in-place, en anglais). 
Cela veut dire que les éléments de la liste changent de place. 
Cela pose un problème car la liste d’origine avec l’ordre d’origine est aussi modifiée. Pour résoudre ce problème, nous pouvons créer une copie de la liste avec la fonction Array.from. Nous écrirons donc :
*/
// Gestion des boutons

boutonTrier.addEventListener("click", function () {
  const piecesOrdonnees = Array.from(pieces);

  piecesOrdonnees.sort(function (a, b) {
    return a.prix - b.prix;
  });

  console.log(piecesOrdonnees);
});

/*Filtrez les éléments d’une liste grâce à la fonction filter
Maintenant que nous avons géré le tri des pièces, ajoutons un listener sur le bouton “Filtrer les pièces non abordables” pour n’afficher que les pièces dont le prix est inférieur ou égal à 35 €.

On écrira donc :*/
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    // ...
});
/*
Pour filtrer les éléments d’une liste, nous allons utiliser la fonction filter. 
Elle prend en argument une fonction anonyme qui sera appelée une fois par élément de la liste. 
La fonction anonyme prend un paramètre : l’élément à tester, qui se trouvera ou non dans la liste filtrée.
La fonction anonyme doit retourner une valeur booléenne :
true si l’élément doit se trouver dans la liste filtrée ;
false si l’élément ne doit pas se trouver dans la liste filtrée.
Dans notre exemple, le fichier JSON contient l’information du prix du produit. 
Le code pour filtrer les pièces indisponibles s’écrit donc :*/

boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
   });

   
/*
Votre site commence à prendre forme ! Vous avez réussi à générer automatiquement les fiches produits sur votre page web. 
Vous l’avez également rendue interactive en utilisant des filtres pour réordonner les fiches.

Nous souhaitons à présent afficher les avis déposés sur les produits par les utilisateurs du site. 
Dans la première partie du cours, nous avions récupéré les produits sous la forme d’un fichier JSON. À présent, nous allons récupérer les avis à l’aide d’une API en ligne. 
Grâce à ce service web, nous serons en mesure d’afficher en continu des données actualisées.

Dans cette partie du cours, votre page web aura donc besoin de communiquer avec une API en ligne disponible sur l’adresse http://localhost:8081. 
Vous devrez héberger cette API en clonant ce dépôt GitHub. Avec un terminal, placez-vous  dans le dossier parent du projet de votre page web et lancez les commandes :

git clone https://github.com/OpenClassrooms-Student-Center/7697016-Back-End.git api-http 
cd api-http 
npm install 
npm start

Dans les deux premières parties de ce cours, 
nous récupérions les données depuis le fichier JSON pieces-autos.json :
*/
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

/*Une requête HTTP concerne toujours une ressource. 
Il s’agit d’un type de donnée que le service web gère, par exemple :
la ressource “pièces automobiles” ;
la ressource “avis utilisateur”.*/

fetch("http://localhost:8081/pieces");
export function ajoutListenersAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");

    for (let i = 0; i < piecesElements.length; i++) {
      piecesElements[i].addEventListener("click", async function (event) {
           /* ... */
      });
    }
}
function genererPieces(pieces){
···for (let i = 0; i < pieces.length; i++) {
···//...
····}
····// Ajout de la fonction ajoutListenersAvis
····ajoutListenersAvis();
}
import { ajoutListenersAvis } from "./avis.js";

<script type="module" src="pieces.js"></script>

const id = event.target.dataset.id;
fetch(`http://localhost:8081/pieces/${id}/avis`);
fetch(`http://localhost:5678/api/works`);

fetch("http://monsite.fr/ma-ressource");
console.log("Le script continue sans attendre la réponse");

await fetch("http://monsite.fr/ma-ressource");
console.log("Le script continuera après avoir reçu la réponse");

const id = event.target.dataset.id;
const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");

const id = event.target.dataset.id;
const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
const avis = await reponse.json();

