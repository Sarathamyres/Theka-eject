const menuMobile = document.querySelector(".menu-mobile");
const logoMenuMobile = document.querySelector(".logo-theka-menu-mobile");
const logoGreyHeader = document.querySelector(".mobile-logo-grey-header");
const containerLogo = document.querySelector(".container-logo-theka");

if (logoGreyHeader) {
  logoGreyHeader.addEventListener("click", () => {
    menuMobile.style.display = "block";
  });
}
if (logoMenuMobile) {
  logoMenuMobile.addEventListener("click", () => {
    menuMobile.style.display = "none";
  });
}
if (containerLogo) {
  containerLogo.addEventListener("click", () => {
    console.log("clicou");
    menuMobile.style.display = "block";
  });
}
