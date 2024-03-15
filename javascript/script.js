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


if (document.body.clientWidth > 900){

(function () {
  let stickySideBar = document.querySelector("#sideBar");

  let memoPositionBar = stickySideBar.offsetTop;

  let recetteSticky = document.querySelector("#recette");

  
  stickySideBar.style.position = "fixed";
  stickySideBar.style.top = `${memoPositionBar}px`;
  stickySideBar.style.left = `${stickySideBar.offsetLeft}px`;
  stickySideBar.style.height = "100%";

  function sticky() {
      let posCurseur = this.pageYOffset;
      console.log(memoPositionBar, posCurseur);


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

