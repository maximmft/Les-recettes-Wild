const readMoreText = document.querySelector("#read-more-text");
const more = document.querySelector("#more");

more.addEventListener("click", ()=>{
    readMoreText.classList.toggle("visible");
})

const button = document.querySelector("#bouton")
const textArea= document.querySelector("textarea")
const message = "Merci de nous avoir contacté"
const errorMessage = "Veuiller insérer votre texte"
const lastName = document.querySelector("#last-name")
const firstName = document.querySelector("#first-name")
const email = document.querySelector("#email")

button.addEventListener("click", function(event){
    event.preventDefault
    // if(!textArea.value || !lastName.value || !firstName.value || !email.value) {
    //     alert (errorMessage)
    // }
    // else {
    //     alert(message)
    // }
    const errorTab = [];
    if (!textArea.value) {
        errorTab.push(" Merci de remplir le champs Message ")
    }
    if (!lastName.value) {
        errorTab.push(" Merci de remplir le champs Nom de famille ")
    }
    if (!firstName.value) {
        errorTab.push(" Merci de remplir le champs prénom ")
    }
    if (!email.value) {
        errorTab.push(" Merci de remplir le champs email ")
    }

    if(errorTab.length !== 0){
        let newMessageError = ""
        for (let i = 0; i < errorTab.length; i++) {
            newMessageError += errorTab[i];
            
        }
        alert(newMessageError)
    }


})