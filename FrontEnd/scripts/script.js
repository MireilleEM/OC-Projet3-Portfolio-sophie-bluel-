// Fonction pour récupérer et afficher les projets
async function chargerProjets() {
    const response = await fetch(`http://localhost:5678/api/works`);
    const projets = await response.json();

        // On récupère le conteneur gallery
        const sectionGallery = document.querySelector(".gallery");

        // On initialise une chaîne vide pour construire le HTML
        let figuresHTML = "";

        // Boucle for pour parcourir chaque projet
        for (let i = 0; i < projets.length; i++) {
            const projet = projets[i];
            figuresHTML += `
                <figure>
                    <img src="${projet.imageUrl}" alt="${projet.title}">
                    <figcaption>${projet.title}</figcaption>
                </figure>
            `;
    }

        // On ajoute les nouvelles figures à la galerie sans vider le contenu existant
        sectionGallery.innerHTML += figuresHTML;

}

chargerProjets();


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
