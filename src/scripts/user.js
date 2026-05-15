const userForms = document.querySelectorAll("form");
const userFormLogin = document.getElementById("user-form-login");
const userFormNewPassword = document.getElementById("user-form-new-password");
const userFormCreateAccount = document.getElementById("user-form-register");
const linkForgotPassword = document.getElementById("forgot-password");
const linksCreateAccount = document.querySelectorAll(".create-account");
const formButtonBack = document.querySelectorAll(".back");
const saveNewPassword = document.getElementById("save-new-password");
const inputs = document.querySelectorAll("input");

function errorInput(input) {
  inputs.forEach((input) => {
    if (input.value == "") {
      input.style.border = "3px solid red";
    } else {
      input.style.border = "2px solid  #f78520";
    }
  });
} // função ainda não usada

userForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    inputs.forEach((input) => {
      if (input.value == " ") {
        errorInput();
      }
    });
  });
});
function ExitloginEnterNewPassword() {
  userFormLogin.classList.remove("active");
  userFormNewPassword.classList.add("active");
}
function exitNewPasswordEnterlogin() {
  userFormNewPassword.classList.remove("active");
  userFormLogin.classList.add("active");
}
function linkCreateAccount() {
  userFormLogin.classList.remove("active");
  userFormNewPassword.classList.remove("active");
  userFormCreateAccount.classList.add("active");
}
linkForgotPassword.addEventListener("click", () => {
  ExitloginEnterNewPassword();
});
linksCreateAccount.forEach((createAccount) => {
  createAccount.addEventListener("click", () => {
    linkCreateAccount();
  });
});
formButtonBack.forEach((back) => {
  back.addEventListener("click", (e) => {
    let currentForm = e.target.closest("form");
    if (currentForm) {
      currentForm.classList.remove("active");
      userFormLogin.classList.add("active");
    }
  });
});
saveNewPassword.addEventListener("click", () => {
  exitNewPasswordEnterlogin();
});
