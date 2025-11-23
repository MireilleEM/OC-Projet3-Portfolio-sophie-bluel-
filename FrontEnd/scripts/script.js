//vérification de la connexion au chargement de la page /

const statut = document.querySelector("#statut");
const lienActif = document.querySelector("a.admin") 
const bandeau = document.querySelector(".bandeau2")
const divModif = document.querySelector(".modif") 
const divFiltres = document.querySelector(".ensFiltres") 
  // récupérer le statut actuel du lien

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
    if (token) {
        connexion();
    } 
});

function connexion(){
        lienActif.classList.remove("admin"); // rend actif le lien si admin existe (donc pas dans html_edit)
        bandeau.classList.remove("masque");
        divModif.classList.remove("masque");
        divFiltres.classList.add("masque");
        
        statut.textContent = "logout";
    }
    


function deconnexion() { 
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        
        window.location.href = './login.html';   
}
statut.addEventListener("click", () => {
  const token = localStorage.getItem("token");
  if(token){
  deconnexion(); 
  } 
  });



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

  console.log("Début de chargerCategories");//debug

    const response_cat = await fetch(`http://localhost:5678/api/categories`);
    const categories = await response_cat.json();

    // On récupère le conteneur des boutons
    const divBoutons = document.querySelector(".boutons");
 if (!divBoutons) {
    console.error("Élément .boutons introuvable ! Vérifie que le DOM est complètement chargé.");
    return;
  } //debug
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
console.log("Boutons ajoutés au DOM"); // Log pour confirmation

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


//fonctionnement MODALE
// Récupère les éléments du DOM
const popup = document.querySelector("#popup");
const openPopup = document.querySelector("#openPopup");
const fermeture = document.querySelector(".close");

// Ouvre la modale
openPopup.addEventListener("click", () => {
  popup.style.display = "block";
  afficherProjetsPopup(tousLesProjets);
});

function afficherProjetsPopup(tousLesProjets) {
  const galleryPopup = document.querySelector(".galleryPopup");
  let figuresHTML2 = "";
  for (let i = 0; i < tousLesProjets.length; i++) {
            const monprojet = tousLesProjets[i];
            figuresHTML2 += `
                <figure class="miniature">
                    <img src="${monprojet.imageUrl}" alt="${monprojet.title}">
                    <i class ="poubelle fa-regular fa-trash-alt" aria-hidden="true"></i>
                </figure>
            `;
}
        // On ajoute les nouvelles figures à la galerie sans vider le contenu existant
        galleryPopup.innerHTML = figuresHTML2;
suppression();
};


// Ferme la modale (bouton ×)
fermeture.addEventListener("click", () => {
  popup.style.display = "none";
});

// Ferme la modale si l'utilisateur clique en dehors
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// Ferme la modale avec la touche Échap
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.style.display = "none";
  }
});


const allPoubelles = document.querySelectorAll(".poubelle");
//console.log("Nombre de poubelles trouvées :", allPoubelles.length); // Debug

function suppression(){
  for (let k = 0; k < allPoubelles.length; k++) {
    let supp = allPoubelles[k]
    supp.addEventListener("click", function() {
    //
    console.log("Clic détecté sur la poubelle", k); // Debug
    alert("suppression de l'élément " + k) ;  
    });
  }
};



/*document.addEventListener("click", function(e) {
    if (e.target.classList.contains("poubelle")) {
        const miniature = e.target.closest(".miniature");
        if (miniature) {
            alert("Suppression de la miniature");
            miniature.remove();
        }
    }
});*/




/*function setupSuppression() {
    allPoubelles.forEach((poubelle, index) => {
        poubelle.addEventListener("click", function() {
            // Trouve la figure parent et la supprime
            const miniature = this.closest(".miniature");
            if (miniature) {
                miniature.remove();
            }
        });
    });
}*/


// remplir select:

async function listerCategories() {
    const response_cat = await fetch(`http://localhost:5678/api/categories`);
    const categories = await response_cat.json();
    return categories;
    
}

function listeSelect(donnees) {
  const selectInput = document.querySelector("#listeCategories");
  selectInput.innerHTML = ''; // select vide

  // Je parcours les données et ajoute chaque option
  donnees.forEach(item => {
    const baliseOption = document.createElement("option");
    baliseOption.textContent = item.name; 
    selectInput.appendChild(baliseOption);
  });
}
async function remplirSelect() {
    const categories = await listerCategories();
    listeSelect(categories);
}
remplirSelect();


const ajoutPhoto = document.querySelector(".ajoutPhoto")
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
ajoutPhoto.addEventListener("click", function(){
        option1.classList.add("masque");
        option2.classList.remove("masque");
        //chargerProjets();
});
