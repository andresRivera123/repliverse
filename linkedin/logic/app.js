import { POSTS } from "../data/post.js";

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay")
const postsContainer = document.getElementById("postsContainer");
const postTemplate = document.getElementById("postTemplate");
const fragment = document.createDocumentFragment();


/* Events with click */
document.addEventListener("click", (e) => {
    /* Open sidebar */
    if(e.target.id === "iconOpenSidebar"){
        showSidebar();
    }else if (!sidebar.contains(e.target) && e.target.id !== "iconOpenSidebar" ){
        hideSidebar();
    }
})

function showSidebar(){
    sidebar.classList.add("visible");
    overlay.classList.add("visible");
    document.body.classList.add("no-scroll");
}

function hideSidebar(){
    sidebar.classList.remove("visible");
    overlay.classList.remove("visible");
    document.body.classList.remove("no-scroll");
}

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



