const userFormLogin = document.getElementById("user-form-login");
const userFormRegister = document.getElementById("user-form-register");
const formCreateAccount = document.getElementById("user-form-register");
const emailForRecoverPassword = document.getElementById(
  "user-form-email-new-password",
);
const backForLogin = document.querySelectorAll(".back");
const linkForgotPassword = document.getElementById("forgot-password");
const linksCreateAccount = document.querySelectorAll(".create-account");

linkForgotPassword.addEventListener("click", () => {
  userFormLogin.classList.remove("active");
  emailForRecoverPassword.classList.add("active");
});

backForLogin.forEach((back) => {
  back.addEventListener("click", () => {
    formCreateAccount.classList.remove("active");
    emailForRecoverPassword.classList.remove("active");
    userFormLogin.classList.add("active");
  });
});
linksCreateAccount.forEach((createAccount) => {
  createAccount.addEventListener("click", () => {
    userFormLogin.classList.remove("active");
    emailForRecoverPassword.classList.remove("active");
    formCreateAccount.classList.add("active");
  });
});

function inputEmpty(input) {
  input.style.border = "3px solid red";
}

userFormLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  let formValido = true;
  const inputsLogin = userFormLogin.querySelectorAll("input");

  inputsLogin.forEach((inputLogin) => {
    if (inputLogin.value.trim() === "") {
      inputEmpty(inputLogin);
      formValido = false;
    } else {
      inputLogin.style.border = "2px solid #f78520";
    }
  });

  if (!formValido) return;

  const userEmail = document.getElementById("user-email");
  const userPassword = document.getElementById("password");

  if (!userEmail || !userPassword) {
    return;
  }

  const dataFormLogin = {
    email: userEmail.value,
    password: userPassword.value,
  };

  fetch("https://thekaapi3.pythonanywhere.com/auth/token/", {
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

      console.log("Login efetuado com sucesso:", data);
      alert("Login realizado com sucesso!");

      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Falha ao entrar. Verifique suas credenciais.");
    });
});
