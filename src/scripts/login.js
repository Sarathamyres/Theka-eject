const userFormLogin = document.getElementById("user-form-login");
const formCreateAccount = document.getElementById("user-form-register");
const emailForRecoverPassword = document.getElementById(
  "user-form-email-new-password",
);
const backForLogin = document.querySelectorAll(".back");
const linkForgotPassword = document.getElementById("forgot-password");
const linksCreateAccount = document.querySelectorAll(".create-account");

function inputEmpty(input) {
  input.style.border = "3px solid red";
}

userFormLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputsLogin = userFormLogin.querySelectorAll("input");
  inputsLogin.forEach((inputLogin) => {
    if (inputLogin.value == "") {
      inputEmpty(inputLogin);
    } else {
      inputLogin.style.border = "2px solid #f78520";
    }
  });
});
linkForgotPassword.addEventListener("click", () => {
  userFormLogin.classList.remove("active");
  emailForRecoverPassword.classList.add("active");
});
linksCreateAccount.forEach((linkCreateAccount) => {
  linkCreateAccount.addEventListener("click", () => {
    userFormLogin.classList.remove("active");
    userFormRegister.classList.add("active");
  });
});
if (backForLogin) {
  backForLogin.forEach((back) => {
    back.addEventListener("click", () => {
      if (emailForRecoverPassword) {
        emailForRecoverPassword.classList.remove("active");
      }
      if (formCreateAccount) {
        formCreateAccount.classList.remove("active");
      }
      if (emailForRecoverPassword) {
        emailForRecoverPassword.classList.remove("active");
      }
      userFormLogin.classList.add("active");
    });
  });
}
userFormLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  //const formLogin = new FormData(userFormLogin);
  const userEmail = document.getElementById("user-email");
  const userPassword = document.getElementById("password");
  if (!userEmail && !userPassword) {
    return;
  }
  const dataFormLogin = {
    email: userEmail.value,
    password: userPassword.value,
  };
  fetch("https://thekaapideploy2.pythonanywhere.com/auth/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataFormLogin),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Usuário ou senha incorretos");
      }
      return res.json();
    })
    .then((data) => {
      const tokenAccess = data.access;
      localStorage.setItem("token", tokenAccess);
      const tokenRefresh = data.refresh;
      localStorage.setItem("refresh", tokenRefresh);

      console.log(data);
      alert("Login realizado com sucesso!");
      window.location.href = "/pages/home.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Falha ao entrar. Verifique suas credenciais.");
    });
});
