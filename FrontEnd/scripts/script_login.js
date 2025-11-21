
const formAuth =document.querySelector("#formAuth")
async function authentification(){  
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;  
    const identifiants = {
            email,
            password
            // on peut aussi faire comme çà:
            //email: document.querySelector("[name=email]").value,
            //password: document.querySelector("[name=password]").value
        };
    const utilisateur = JSON.stringify(identifiants);
    const reponse = await fetch("http://localhost:5678/api/users/login",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: utilisateur
     });
     const data = await reponse.json();
     //const texte = data.text();
    // const retour = JSON.stringify(data);

     if (data.message) {
        alert("Connexion ratée : " + data.message);
        return; // Stoppe la fonction
    }else{  

     //alert("connexion réussie");
       // if(retour.message == "user not found"){
       //     alert("connexion ratée");
      //  }
      //  else{
            alert("connexion réussie")
    //    };
   // alert("Réponse API : " + message);
   // console.log("Réponse API:", texte);
  
     
  // Stocke les informations dans le localStorage:
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('token', data.token);
   // const token = localStorage.getItem("token")
    //if (token){
     //   const lienAdmin = document.querySelector("a.admin");
     //   lienAdmin.classList.remove("admin"); // rend actif le lien
    }
   
     // Redirige vers une page protégée par authentification
     window.location.href = './index.html';
     
}

formAuth.addEventListener('submit', async function(event){
    event.preventDefault();
    authentification();
    
});


/*async function authentification(){
    const formAuth =document.querySelector("#formAuth")
    formAuth.addEventListener('submit', async function(event){
    event.preventDefault();
    const identifiants = {
            email: event.target.querySelector("[name=email]").value,
            // équivalent à email: document.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=name]").value
        };
    // Création de la charge utile au format JSON:
    const chargeUtile = JSON.stringify(identifiants);
    // on poste les identifiants avec fetch en POST    
    const reponse = await fetch("http://localhost:5678/api/users/login",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
     });
    //const coordonnees = await reponse.json();
     //if(email == "sophie.bluel@test.tld" && password == "S0phie"){
    //alert(coordonnees);

    const texte = await reponse.text();
console.log("Réponse texte:", texte);
alert(texte);

     });
    }
    
*/



    /*async function authentification() {
    const formAuth = document.querySelector("#formAuth");
    formAuth.addEventListener('submit', async function(event) {
        event.preventDefault();
        console.log("Formulaire soumis !"); // Log 1

        const identifiants = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=name]").value
        };
        console.log("Identifiants:", identifiants); // Log 2

        const chargeUtile = JSON.stringify(identifiants);
        console.log("Charge utile:", chargeUtile); // Log 3

        try {
            const reponse = await fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: chargeUtile
            });
            console.log("Réponse brute:", reponse); // Log 4

            if (!reponse.ok) {
                throw new Error(`Erreur HTTP: ${reponse.status}`);
            }

            const coordonnees = await reponse.json();
            console.log("Coordonnées:", coordonnees); // Log 5

            alert(JSON.stringify(coordonnees)); // Affiche les données reçues
        } catch (erreur) {
            console.error("Erreur:", erreur); // Log 6
            alert("Une erreur est survenue. Voir la console pour plus de détails.");
        }
    });
}*/



