const menuMobile = document.querySelector(".menu-mobile");
const logoTheka = document.querySelector(".container-logo-theka");
const logoMenuMobile = document.querySelector(".logo-theka-menu-mobile");
const logoMobileCollection = document.getElementById("logo-Theka-Collection");
const logoThekaContact = document.getElementById("logo-Theka-Contact");

if (logoTheka) {
  logoTheka.addEventListener("click", () => {
    menuMobile.style.display = "flex";
  });
}
if (logoMenuMobile) {
  logoMenuMobile.addEventListener("click", () => {
    menuMobile.style.display = "none";
  });
}
if (logoMobileCollection) {
  logoMobileCollection.addEventListener("click", () => {
    menuMobile.style.display = "flex";
  });
}
if (logoThekaContact) {
  logoThekaContact.addEventListener("click", () => {
    menuMobile.style.display = "flex";
  });
}
