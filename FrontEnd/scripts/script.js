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

// Fonction pour récupérer et afficher les catégories dans les boutons:
async function chargerCategories() {
    const response_cat = await fetch(`http://localhost:5678/api/categories`);
    const categories = await response_cat.json();

        // On récupère le conteneur des boutons
        const divBoutons = document.querySelector(".boutons");

        // On initialise une chaîne vide pour construire le HTML
        let boutonsHTML = `<button type="button" class="filter-btn active">Tous</button>`;

        // Boucle for pour parcourir chaque projet
        for (let i = 0; i < categories.length; i++) {
            const categorie = categories[i];
            boutonsHTML += `<button type="button" class="filter-btn active">${categorie.name}</button>`;
           
    }

        // On ajoute les nouvelles figures à la galerie sans vider le contenu existant
        divBoutons.innerHTML += boutonsHTML;
        

}

chargerCategories();