// 1. Selecionamos os elementos (usando os seletores do seu HTML)
const imagens = document.querySelectorAll(".gallery img");
const vectorButton = document.querySelector(".vector");
let imgAtual = 0;

// 2. Estado inicial: garante que o primeiro livro apareça
if (imagens.length > 0) {
  imagens[0].classList.add("ativa");
}

// 3. O "Escutador" de eventos (substitui o onclick)
vectorButton.addEventListener("click", () => {
  // Remove a classe do livro que está visível agora
  imagens[imgAtual].classList.remove("ativa");

  // Incrementa o índice
  imgAtual++;

  // Se chegar ao fim da lista, volta para o primeiro (índice 0)
  if (imgAtual >= imagens.length) {
    imgAtual = 0;
  }

  // Adiciona a classe ao novo livro atual
  imagens[imgAtual].classList.add("ativa");

  console.log("Mostrando livro:", imgAtual + 1);
});
