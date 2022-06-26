const menu = document.getElementById("nav-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 780) {
    menu.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
  } else {
    menu.style.display = "none";
    openMenu.style.display = "block";
  }
});
