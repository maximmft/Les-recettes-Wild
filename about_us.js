const readMoreText = document.querySelector("#read-more-text");
const more = document.querySelector("#more");

more.addEventListener("click", ()=>{
    readMoreText.classList.toggle("visible");
})

const button = document.querySelector("#bouton")
const textArea= document.querySelector("textarea")
const message = "Merci de nous avoir contacté"
const errorMessage = "Veuiller insérer votre texte"

button.addEventListener("click", function(event){
    event.preventDefault
    if(!textArea.value) {alert (errorMessage)}
    else {alert(message)}
})