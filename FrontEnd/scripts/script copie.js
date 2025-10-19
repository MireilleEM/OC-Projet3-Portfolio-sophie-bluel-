/*// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
const reponse =fetch(`http://localhost:5678/api/works`);*/

// URL API 
const apiUrl = "http://localhost:5678/api/works"; // Remplace par ton endpoint réel

// Fonction pour récupérer les projets depuis l'API et les afficher
async function chargerProjets() {

        const response = await fetch(`http://localhost:5678/api/works`);
        const projets = await response.json();

        // On récupère le conteneur gallery
        const sectionGallery = document.querySelector(".gallery");

        /*// On vide la galerie pour éviter les doublons
        sectionGallery.innerHTML = "";*/

        // Pour chaque projet, on crée une figure et on l'ajoute à la galerie
        projets.forEach(projet => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const figcaption = document.createElement("figcaption");
            img.src = projet.imageUrl; // Utilisation directe de l'URL fournie par l'API
            img.alt = projet.title;
            figcaption.textContent = projet.title;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            sectionGallery.appendChild(figure);
        });
}

// Appel de la fonction au chargement de la page
//document.addEventListener("DOMContentLoaded", chargerProjets);




// Contenu de la nouvelle figure
let contenuPhoto = "assets/images/sophie-bluel.png"
let contenuTitre = "titre du nouveau projet"

/*
// Création de la figure en tant qu'élément DOM
let figure = document.createElement("figure");
let img = document.createElement("img");
img.src = contenuPhoto;
img.alt = "image du projet";
let figcaption = document.createElement("figcaption");
figcaption.textContent = contenuTitre;

// Assemblage de la figure
figure.appendChild(img);
figure.appendChild(figcaption);

// On récupère le conteneur gallery
let sectionGallery = document.querySelector(".gallery");

// Ajout de la nouvelle figure à la galerie
sectionGallery.appendChild(figure);
*/

let figureHTML = `
    <figure>
        <img src="${contenuPhoto}" alt="image du projet">
        <figcaption>${contenuTitre}</figcaption>
    </figure>
`;

let sectionGallery = document.querySelector(".gallery");
sectionGallery.innerHTML += figureHTML; // += pour ajouter, pas remplacer

