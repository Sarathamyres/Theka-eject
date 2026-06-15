emailForRecoverPassword.addEventListener("submit", (event) => {
  event.preventDefault();
  let formOk = true;

  const inputEmail = emailForRecoverPassword.querySelector("input");
  if (inputEmail.value.trim() === "") {
    formOk = false;
    inputEmpty(inputEmail);
  } else {
    inputEmail.style.border = "2px solid #f78520";
  }
  if (formOk) {
    const email = new FormData(emailForRecoverPassword);
    const dataEmail = Object.fromEntries(email.entries());
    fetch("https://thekaapideploy3.pythonanywhere.com/auth/password/reset/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataEmail),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao solicitar recuperação de senha");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Email de recuperação enviado com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Falha ao solicitar recuperação de senha. Verifique os dados ou tente novamente mais tarde.",
        );
      });
  }
});
