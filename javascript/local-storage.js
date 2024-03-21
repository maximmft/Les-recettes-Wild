// Création comment 

const post = [
    {
        firstname: "Mickael",
        picture: "https://ca.slack-edge.com/T6SG2QGG2-U03TJJCU40P-74266cd58d2e-512",
        date: new Date().toLocaleDateString(),
        commentPost: "Il est vraiment trop bien ce site, ça m'a motivé à me faire plus souvent à manger. Merci pour les recettes !",
    },

    {
        firstname: "Brian",
        picture: "https://ca.slack-edge.com/T6SG2QGG2-U059W1UEG86-031db6a84fb6-512",
        date: new Date().toLocaleDateString(),
        commentPost: "Cool les recettes ! Ce serait sympa d'en mettre toutes les semaines.",
    },

    {
        firstname: "Beyonce",
        picture: "https://resize.prod.docfr.doc-media.fr/s/1200/ext/eac4ff34/content/2022/7/5/20-coiffures-a-piquer-a-beyonce-3e32633da113fe25.jpeg",
        date: new Date().toLocaleDateString(),
        commentPost: "Thanks to this site, I can make French dishes at home ! Thanks guys !!",
    },

    {
        firstname: "Rihanna",
        picture: "https://s.yimg.com/ny/api/res/1.2/_G7FIkELfPImzwZDT73N6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTgxMDtoPTYwNw--/https://media.zenfs.com/fr_FR/News/closer/Polemique-Rihanna-poste-des-photos-d-elle-fumant-des-joints-geants_exact810x609_l.jpg",
        date: new Date().toLocaleDateString(),
        commentPost: "Fuck this I prefer to order Uber Eat 🖕.",
    },

]
post.forEach((post) => {
    // console.log("tutu", post)
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

module.exports = post;