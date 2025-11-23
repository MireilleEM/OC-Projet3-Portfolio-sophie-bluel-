
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
     window.location.href = './index_global.html';
     
}

formAuth.addEventListener('submit', async function(event){
    event.preventDefault();
    authentification();
    
});

