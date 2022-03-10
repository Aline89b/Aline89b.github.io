//responsive menu - toggle button click
let toggleBtn = document.getElementById("hamburger-menu");
toggleBtn.addEventListener("click",getResponsiveMenu);
let nav = document.querySelector("nav");
function getResponsiveMenu() {

if (nav.style.display === "none") {
  nav.style.display = "block";
} else {
  nav.style.display = "none";
}
}
