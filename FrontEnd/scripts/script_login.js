const connectButton = document.querySelector("#connectButton");
const emailInput = document.querySelector("#email");
const mdpInput = document.querySelector("#name");

/*connectButton.addEventListener(click,function(){
  let email = emailInput.value;
  let mdp = mdpInput.value;
  const email = emailInput.value;
const mdp = mdpInput.value;
})*/
const formAuth =document.querySelector("#formAuth")
async function authentification(){
    
    const identifiants = {
            email: document.querySelector("[name=email]").value,
            password: document.querySelector("[name=password]").value
        };
    const chargeUtile = JSON.stringify(identifiants);
    const reponse = await fetch("http://localhost:5678/api/users/login",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
     });
     alert("connexion réussie");
     // Redirige vers une page protégée
     window.location.href = './index_edit.html';
}
//formAuth.addEventListener('submit', async function(event){
formAuth.addEventListener('submit', async function(event){
    event.preventDefault();
    authentification();
});

/*const inputPrixMax = document.querySelector('#prix-max')
connectButton.addEventListener('input', function(){
    const email = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });*/
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

