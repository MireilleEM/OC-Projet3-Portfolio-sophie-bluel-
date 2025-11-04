let tousLesProjets = []; // Variable globale pour pouvoir stocker et atteindre les projets

// Fonction pour récupérer et afficher les projets
async function chargerProjets() {
    const response = await fetch(`http://localhost:5678/api/works`);
    tousLesProjets = await response.json();
  
    afficherProjets(tousLesProjets); // On appelle une fonction séparée pour afficher tout au début
}

// Fonction pour afficher les projets (utile aussi pour le filtrage)
function afficherProjets(listeProjets) {
        // On récupère le conteneur gallery
        const sectionGallery = document.querySelector(".gallery");

        // on vide la galerie avant de la remplir:
        let figuresHTML = "";

        // Boucle for pour parcourir chaque projet
        for (let i = 0; i < listeProjets.length; i++) {
            const projet = listeProjets[i];
            figuresHTML += `
                <figure>
                    <img src="${projet.imageUrl}" alt="${projet.title}">
                    <figcaption>${projet.title}</figcaption>
                </figure>
            `;
    }

        // On ajoute les nouvelles figures à la galerie sans vider le contenu existant
        sectionGallery.innerHTML = figuresHTML;

};

//chargerProjets();

// Fonction pour récupérer et afficher les catégories dans les boutons:
async function chargerCategories() {
    const response_cat = await fetch(`http://localhost:5678/api/categories`);
    const categories = await response_cat.json();

    // On récupère le conteneur des boutons
    const divBoutons = document.querySelector(".boutons");

    // On initialise une chaîne vide pour construire le HTML
    let boutonsHTML = `<button type="button" class="filter-btn active">Tous</button>`;// active enlevé

    // Boucle for pour parcourir chaque projet
    for (let i = 0; i < categories.length; i++) {
        const categorie = categories[i];
        boutonsHTML += `<button type="button" class="filter-btn">${categorie.name}</button>`;          
    }

    // On ajoute les nouvelles figures à la galerie sans vider le contenu existant
    divBoutons.innerHTML = boutonsHTML;
        // On ajoute les boutons au DOM
        /*boutonsHTML += `<button type="button" class="filter-btn" data-category="${categorie.name}">${categorie.name}</button>`;
        }
        divBoutons.innerHTML = boutonsHTML;*/


// On sélectionne maintenant les boutons créés
const allButtons = document.querySelectorAll(".filter-btn");

// Logique pour afficher la catégorie concernée
for (let j = 0; j < allButtons.length; j++) {
allButtons[j].addEventListener("click", function() {
    //let filtre = allButtons[j].textContent; 
    let filtre = this.textContent; // On récupère la catégorie
    //const filtre = this.getAttribute("data-category");
    console.log(filtre); 
    // On met à jour le style (bouton actif)
      allButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    
    let projetsFiltres;
     if (filtre === "Tous") {
        //let projetsFiltres = tousLesProjets; // Affiche tout
        afficherProjets(tousLesProjets);
      } else {
        const projetsFiltres = tousLesProjets.filter(
          (projet) => projet.category.name === filtre
        );
        afficherProjets(projetsFiltres);
      }

    //le mien:
     /* console.log(filtre); 
    const projetsFiltres = projets.filter(function (projet) {
        return projet.category.name === filtre;
    }); */  
})
}
}
// On lance les fonctions
chargerProjets();
chargerCategories();




