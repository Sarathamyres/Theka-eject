formCreateAccount.addEventListener("submit", (event) => {
  let formok = true;
  event.preventDefault();
  const inputsRegister = formCreateAccount.querySelectorAll("input");
  inputsRegister.forEach((inputRegister) => {
    if (inputRegister.value.trim() === "") {
      inputEmpty(inputRegister);
      formok = false;
    } else {
      inputRegister.style.border = "2px solid #f78520";
    }
  });
  if (inputsRegister[2].value !== inputsRegister[3].value) {
    formok = false;
    inputEmpty(inputsRegister[2]);
    inputEmpty(inputsRegister[3]);
    console.warn("As senhas não coincidem.");
  }
  if (formok) {
    const formRegister = new FormData(formCreateAccount);
    const dataFormRegister = Object.fromEntries(formRegister.entries());
    fetch("https://thekaapideploy2.pythonanywhere.com/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataFormRegister),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao criar a conta");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Conta criada com sucesso!");
        formCreateAccount.reset();
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Falha ao registrar. Verifique os dados ou tente novamente mais tarde.",
        );
      });
  }
});
