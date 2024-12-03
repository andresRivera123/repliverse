const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const postModal = document.getElementById("modalPost");
const postModalContainer = document.getElementById("modalPostContainer");


/* Events with click */
document.addEventListener("click", (e) => {
  /* sidebar */
  if (e.target.id === "iconOpenSidebar") {
    showSidebar();
  } else if (!sidebar.contains(e.target)) {
    hideSidebar();
  }
  /* postModal */
  if (e.target.id === "buttonCreatePost") {
    openPostModal();
  } else if (!postModalContainer.contains(e.target) || e.target.id === "closePostModal") {
    closePostModal();
  }

});

function showSidebar() {
  sidebar.classList.add("visible");
  overlay.classList.add("visible");
  document.body.classList.add("no-scroll");
}

function hideSidebar() {
  sidebar.classList.remove("visible");
  overlay.classList.remove("visible");
  document.body.classList.remove("no-scroll");
}

function openPostModal() {
  postModal.style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closePostModal() {
  postModal.style.display = "none";
  document.body.classList.remove("no-scroll");
}
