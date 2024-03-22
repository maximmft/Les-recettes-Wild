

// Side nave 


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


//  Display recipes in side nav

const listRecipes = document.querySelector("#recettes-wild")
const recipeList = document.querySelector("#recettes-side-nav");

listRecipes.addEventListener("click", function () {
  recipeList.classList.toggle("visible");
});


// recipe.style.display = "block";});
// });


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

const chooseName = document.querySelector("#choose-name");

// Création comment 

let post = [
  {
    firstname: "Mickael",
    picture: "https://ca.slack-edge.com/T6SG2QGG2-U03TJJCU40P-74266cd58d2e-512",
    date: "02/02/2024",
    commentPost: "Il est vraiment trop bien ce site, ça m'a motivé à me faire plus souvent à manger. Merci pour les recettes !",
  },

  {
    firstname: "Brian",
    picture: "https://ca.slack-edge.com/T6SG2QGG2-U059W1UEG86-031db6a84fb6-512",
    date: "12/03/2024",
    commentPost: "Cool les recettes ! Ce serait sympa d'en mettre toutes les semaines.",
  },

  {
    firstname: "Beyonce",
    picture: "https://resize.prod.docfr.doc-media.fr/s/1200/ext/eac4ff34/content/2022/7/5/20-coiffures-a-piquer-a-beyonce-3e32633da113fe25.jpeg",
    date: "15/03/2024",
    commentPost: "Thanks to this site, I can make French dishes at home ! Thanks guys !!",
  },

  {
    firstname: "Rihanna",
    picture: "https://s.yimg.com/ny/api/res/1.2/_G7FIkELfPImzwZDT73N6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTgxMDtoPTYwNw--/https://media.zenfs.com/fr_FR/News/closer/Polemique-Rihanna-poste-des-photos-d-elle-fumant-des-joints-geants_exact810x609_l.jpg",
    date: "19/03/2024",
    commentPost: "Fuck this I prefer to order Uber Eat 🖕.",
  },

]
console.log(localStorage.getItem("storageItem"));
post = (localStorage.getItem("storageItem")) ? JSON.parse(localStorage.getItem("storageItem")) : post;

post.forEach((post) => {
  createComment(post.firstname, post.picture, post.date, post.commentPost)
});

function createComment(namePara, picture, datePost, postComment) {

  const cards = document.querySelector("#list");
  // console.log(cards)
  // post.appendChild(cards);

  const cardComment = document.createElement("div");
  cardComment.classList.add("comment");
  cards.appendChild(cardComment);

  const userInformation = document.createElement("div");
  userInformation.classList.add("user");
  cardComment.appendChild(userInformation);

  const userImgContent = document.createElement("div");
  userImgContent.classList.add("user-image");
  userInformation.appendChild(userImgContent);

  const userImg = document.createElement("img");
  userImg.src = picture;
  userImgContent.appendChild(userImg);

  const userMeta = document.createElement("div");
  userMeta.classList.add("user-meta");
  userInformation.appendChild(userMeta);

  const firstName = document.createElement("p");
  firstName.classList.add("name");
  firstName.textContent = namePara;
  userMeta.appendChild(firstName);

  const postDate = document.createElement("p");
  postDate.classList.add("day");
  postDate.textContent = datePost;
  userMeta.appendChild(postDate);

  const addPostComment = document.createElement("p");
  addPostComment.classList.add("comment-post");
  addPostComment.textContent = postComment;
  cardComment.appendChild(addPostComment);

  console.log(cards)
}

commentButton.addEventListener('click', () => {
  addComment();
});


newComment.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    commentButton.click();
  }
});


function addComment() {
  if (newComment.value) {
    const avatar = document.querySelector("#avatar");
    const reader = new FileReader();
    reader.readAsDataURL(avatar.files[0]);
    const username = chooseName.value;

    reader.addEventListener(
      "load", () => {
        post.push(
          {
            firstname: username,
            picture: reader.result,
            date: new Date().toLocaleDateString(),
            commentPost: newComment.value,
          },

        )
        localStorage.setItem("storageItem", JSON.stringify(post));
        createComment(post[post.length - 1].firstname, post[post.length - 1].picture, post[post.length - 1].date, post[post.length - 1].commentPost);
        myFunction();
      }
    )
  }

  function myFunction() {
    document.querySelector("#form-comment").reset();
  }
}
// end section creation d'un nouveau commentaire