const formContact = document.getElementById("form-contact");
const submitContact = document.getElementById("submit-contact");

const inputs = document.querySelectorAll("input");

formContact.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    input.value = "";
  });
  alert("Mensagem enviada com sucesso!");
});
