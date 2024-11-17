const menuMobile = document.getElementById("off-menu-mobile");
const menu = document.getElementById("menu");
const closeMenu = document.querySelector(".close-menu");
const body = document.querySelector("body");

/* SIDEBAR */
let activeMenu = false;

const changeBody = () => {
  if (activeMenu) {
    console.log("evitar")
    body.style.height = "100%";
    body.style.overflow = "hidden";
  } else {
    console.log("arreglar")
    console.log(activeMenu)
    body.style.height = "max-content";
    body.style.overflow = "visible";
  }
};

menuMobile.addEventListener("click", () => {
  activeMenu = !activeMenu;
  console.log("AM: " + activeMenu);
  if (activeMenu) {
    menu.classList.add("active-mobile-menu");
  } else {
    menu.classList.remove("active-mobile-menu");
  }
  changeBody();
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active-mobile-menu");
  activeMenu = !activeMenu;
  console.log("AM: " + activeMenu);
  changeBody();
});
