const formAddMaterial = document.getElementById("form-add-material");
const numberPages = document.querySelector("#number-pages");
const publicationDate = document.querySelector("#publication-date");
const buttonSubmit = document.getElementById("save");

formAddMaterial.addEventListener("submit", (event) => {
  event.preventDefault();
  const author = document.querySelector("#author");
  const published = document.querySelector("#published");
  const isbn = document.querySelector("#isbn");
  const text = document.querySelector("#text");
  const title = document.querySelector("#title");
  const numberPages = document.querySelector("#number-pages");
  const publicationDate = document.querySelector("#publication-date");
  if (
    !published ||
    !isbn ||
    !text ||
    !title ||
    !numberPages ||
    !publicationDate
  ) {
    return;
  }
  const books = {
    titulo: title.value,
    numero_paginas: Number(numberPages.value),
    isbn: isbn.value,
    autor: author.value,
    ano_publicacao: Number(publicationDate.value),
    editora: 0,
    resumo: text.value,
    genero: "indefinido"
  };
  const accessToken = localStorage.getItem("token");

  fetch("https://thekaapideploy2.pythonanywhere.com/livros/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(books),
  })
    .then((res) => {
      res.json();
      throw new Error("erro");
      console.log("deu certo");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Erro na requisição:", error);
    });
});
