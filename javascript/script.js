const sideNav = document.getElementById("side-nav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.querySelector(".overlay");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sideNav.classList.add("active");
    overlay.style.display = "block";

}
/* Set the width of the side navigation to 0 */
function closeNav() {
    sideNav.classList.remove("active");
    overlay.style.display = "none";
}


// Begin Section Side Bar


if (document.body.clientWidth > 900) {

    (function () {
        let stickySideBar = document.querySelector("#side-bar");

        let memoPositionBar = stickySideBar.offsetTop;

        let recetteSticky = document.querySelector("#recette");


        stickySideBar.style.position = "fixed";
        stickySideBar.style.top = `${memoPositionBar}px`;
        stickySideBar.style.left = `${stickySideBar.offsetLeft}px`;
        stickySideBar.style.height = "100%";

        function sticky() {
            let posCurseur = this.pageYOffset;

            if (memoPositionBar - posCurseur < 1) {

                stickySideBar.style.position = "fixed";
                stickySideBar.style.top = "0px";
                stickySideBar.style.zIndex = 3;
                stickySideBar.style.height = "100%";
                stickySideBar.style.padding = "30px";
                stickySideBar.style.paddingTop = "10%";
                stickySideBar.style.width = "20%";
                recetteSticky.style.width = "75%";
                recetteSticky.style.marginLeft = "35%";
            }


            if (posCurseur < 366) {
                stickySideBar.classList.remove("animateSideBar");
                stickySideBar.style.position = "fixed";
                stickySideBar.style.top = `${memoPositionBar - posCurseur}px`;
                stickySideBar.style.left = `${stickySideBar.offsetLeft}px`;

            }
        }
        window.addEventListener("scroll", sticky);

    })()
};
// End Section Side Bar

// Section creation d'un nouveau commmentaire

const commentButton = document.querySelector("#btn-comment");

const newComment = document.querySelector("#new-comment");

const comment = document.querySelector(".comment");

const list = document.querySelector("#list");

const commentPost = document.querySelector(".comment-post");

commentButton.addEventListener('click', () => {
    if (newComment.value) {
        const clone = comment.cloneNode(true);
        clone.children[1].innerText = newComment.value;
        list.insertBefore(clone, newComment);
        newComment.value = "";
    }
})

// end section creation d'un nouveau commentaire
