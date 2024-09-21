const postsContainer = document.getElementById("postsContainer");
console.log(postsContainer)
const postTemplate = document.getElementById("postTemplate")
const fragment = document.createDocumentFragment()

const POSTS = [
    post1 = {
        logoImgURL:"./img/icons/nielsen-norman-group-logo.jpeg",
        logoAlt:"Nielsen Norman Group Logo",
        userName:"Nielsen Norman Group",
        userFollowers:"308.242 seguidores",
        postTime:"3 horas",
        postDescription:"Ever wonder how companies keep their designs consistent? It’s all thanks to design systems and style guides... but what's the difference?",
        postImageURL:"./img/images/post-1.png",
    },

    post2 = {
        logoImgURL:"./img/icons/javascript-logo.jpeg",
        logoAlt:"Javascript Logo",
        userName:"Javascript",
        userFollowers:"1.296.920 seguidores",
        postTime:"4 horas",
        postDescription:"Using GitHub effectively is not just about pushing code, it's about building collaboration. The best GitHub practices are like good habits: they make your life easier without you noticing.",
        postImageURL:"./img/images/post-2.jpeg",
    },
    
]

const drawPost = () => {
    postsContainer.textContent = "";
    POSTS.forEach((post) =>{
        const clone = postTemplate.content.cloneNode(true);
        clone.querySelector(".post__imgLogo").src = post.logoImgURL;
        clone.querySelector(".post__imgLogo").alt = post.logoAlt;
        clone.querySelector(".post__imgLogo").alt = post.userFollowers;
        clone.querySelector(".post__userName").textContent = post.userName;
        fragment.appendChild(clone);
    })
    postsContainer.appendChild(fragment)
}

drawPost();



