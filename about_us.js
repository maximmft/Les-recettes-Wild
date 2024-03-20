const readMoreText = document.querySelector("#read-more-text");
const more = document.querySelector("#more");

more.addEventListener("click", ()=>{
    readMoreText.classList.toggle("visible");
})