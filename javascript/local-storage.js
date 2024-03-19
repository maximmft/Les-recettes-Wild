// Local storage 

// const commentPost = document.querySelector(".comment-post");

// if (localStorage.getItem("#new-comment") != null)
//     commentPost.textContent = localStorage.getItem("#new-comment");

// button.onclick = ()=>{
//     const newComment = document.querySelector("new-comment");
//     localStorage.setItem("new-comment", newComment.value);
//     document.location.reload();
// }

function saveComment(comment) {
    localStorage.setItem("comment", comment);
}

function getComment() {
    localStorage.getItem("comment");
}

function addComment(testComment) {
    let tryComment = getComment();
    tryComment.push(testComment);
    saveComment(comment);
}