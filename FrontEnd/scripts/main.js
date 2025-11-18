/*fonctions principales*/
/*export function logged() {
  if (isLogged()) {
   const statut = document.querySelector("#statut");
   statut.textContent = "logout"; 
} else {
  statut.textContent = "login"; 
}
   const statut = document.querySelector("#statut");
   statut.textContent = "logout";
}


export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href = './login.html'; // Redirige vers la page de connexion
}

export function isLogged() {
    return localStorage.getItem('token') !== null;
}


  async function fetchProtectedData() {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (!token) {
        alert("Vous n'êtes pas connecté !");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5678/api/users/${userId}/projects`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const projects = await response.json();
        console.log("Projets de l'utilisateur :", projects);

    } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
        alert("Erreur lors de la récupération des projets.");
    }
}

/*[
  {
    "id": 1,
    "title": "Abajour Tahina",
    "imageUrl": "http://localhost:5678/images/abajour-tahina1651286843956.png",
    "categoryId": 1,
    "userId": 1,
    "category": {
      "id": 1,
      "name": "Objets"
    }
  },
  {
    "id": 2,
    "title": "Appartement Paris V",
    "imageUrl": "http://localhost:5678/images/appartement-paris-v1651287270508.png",
    "categoryId": 2,
    "userId": 1,
    "category": {
      "id": 2,
      "name": "Appartements"
    }
  },
  {
    "id": 3,
    "title": "Restaurant Sushisen - Londres",
    "imageUrl": "http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png",
    "categoryId": 3,
    "userId": 1,
    "category": {
      "id": 3,
      "name": "Hotels & restaurants"
    }
  },
  {
    "id": 4,
    "title": "Villa “La Balisiere” - Port Louis",
    "imageUrl": "http://localhost:5678/images/la-balisiere1651287350102.png",
    "categoryId": 2,
    "userId": 1,
    "category": {
      "id": 2,
      "name": "Appartements"
    }
  },
  {
    "id": 5,
    "title": "Structures Thermopolis",
    "imageUrl": "http://localhost:5678/images/structures-thermopolis1651287380258.png",
    "categoryId": 1,
    "userId": 1,
    "category": {
      "id": 1,
      "name": "Objets"
    }
  },
  {
    "id": 6,
    "title": "Appartement Paris X",
    "imageUrl": "http://localhost:5678/images/appartement-paris-x1651287435459.png",
    "categoryId": 2,
    "userId": 1,
    "category": {
      "id": 2,
      "name": "Appartements"
    }
  },
  {
    "id": 7,
    "title": "Pavillon “Le coteau” - Cassis",
    "imageUrl": "http://localhost:5678/images/le-coteau-cassis1651287469876.png",
    "categoryId": 2,
    "userId": 1,
    "category": {
      "id": 2,
      "name": "Appartements"
    }
  },
  {
    "id": 8,
    "title": "Villa Ferneze - Isola d’Elba",
    "imageUrl": "http://localhost:5678/images/villa-ferneze1651287511604.png",
    "categoryId": 2,
    "userId": 1,
    "category": {
      "id": 2,
      "name": "Appartements"
    }
  },
  {
    "id": 9,
    "title": "Appartement Paris XVIII",
    "imageUrl": "http://localhost:5678/images/appartement-paris-xviii1651287541053.png",
    "categoryId": 2,
    "userId": 1,
    "category": {
      "id": 2,
      "name": "Appartements"
    }
  },
  {
    "id": 10,
    "title": "Bar “Lullaby” - Paris",
    "imageUrl": "http://localhost:5678/images/bar-lullaby-paris1651287567130.png",
    "categoryId": 3,
    "userId": 1,
    "category": {
      "id": 3,
      "name": "Hotels & restaurants"
    }
  },
  {
    "id": 11,
    "title": "Hotel First Arte - New Delhi",
    "imageUrl": "http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png",
    "categoryId": 3,
    "userId": 1,
    "category": {
      "id": 3,
      "name": "Hotels & restaurants"
    }
  }
]*/
const IDENTIFIANT =[{
  "userId": 1,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
}];

