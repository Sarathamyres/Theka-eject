const buttonLoginLogout = document.querySelectorAll(".button-icon-user-logout");
const iconUser = document.querySelectorAll(".icon-user");
const logout = document.querySelectorAll(".icon-logout");

buttonLoginLogout.forEach((button, index) => {
  button.addEventListener("click", () => {
    iconUser[index].style.display = "none";
    logout[index].style.display = "block";
    console.log("clicou");

    setTimeout(() => {
      iconUser[index].style.display = "block";
      logout[index].style.display = "none";
    }, 3000);
  });
});
logout.forEach((toOut, index) => {
  toOut.addEventListener("click", () => {
    window.location.href = "/pages/user.html";
  });
});
