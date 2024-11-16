import { POSTS } from "../data/post.js";

const iconActiveSidebar = document.getElementById("iconOpenSidebar");
const sidebar = document.getElementById("sidebar");

const postsContainer = document.getElementById("postsContainer");
console.log(postsContainer)
const postTemplate = document.getElementById("postTemplate");
const fragment = document.createDocumentFragment();


/* Events with click */
document.addEventListener("click", (e) => {
    if(e.target.id === "iconActiveSidebar"){
        console.log("CLICK ICON")
    }
})

/* Create post templates in front */
const drawPost = () => {
    postsContainer.textContent = "";
    POSTS.forEach((post) =>{
        const clone = postTemplate.content.cloneNode(true);
        clone.querySelector(".post__imgLogo").src = post.logoImgURL;
        clone.querySelector(".post__imgLogo").alt = post.logoAlt;
        clone.querySelector(".post__imgLogo").alt = post.userFollowers;
        clone.querySelector(".post__userName").textContent = post.userName;
        clone.querySelector(".post__userFollowers").textContent = post.userFollowers;
        clone.querySelector(".post__time").textContent = post.postTime;
        clone.querySelector(".post__description").textContent = post.postDescription
        clone.querySelector(".post__principalImage").src = post.postImagePrincipal;
        clone.querySelector(".post__principalImage").alt = post.postImagePrincipalAlt;
        fragment.appendChild(clone);
    })
    postsContainer.appendChild(fragment)
}

drawPost();



