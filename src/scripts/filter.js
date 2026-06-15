const searchCollectionButton = document.getElementById("search-collection");
const textSearch = document.getElementById("text-search");
const booksList = document.querySelector(".collection-books_list");

async function search() {
  const inputValue = textSearch.value.trim();

  let searchUrl = "";

  if (inputValue === "") {
    searchUrl = "https://thekaapi3.pythonanywhere.com/livros/";
  } else {
    searchUrl = `https://thekaapi3.pythonanywhere.com/livros/?search=${inputValue}`;
  }

  try {
    const response = await fetch(searchUrl);
    const data = await response.json();

    booksList.innerHTML = "";

    data.results.forEach((book) => {
      const newItem = document.createElement("li");

      newItem.innerHTML = `
            <figure>
              <img class="image-book" src="${book.capa}">
              <figcaption>
                <strong>${book.titulo}</strong>
                <p>${book.autor}, ${book.numero_paginas}</p>
              </figcaption>
            </figure>
        `;
      booksList.appendChild(newItem);
    });
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
  }
}
searchCollectionButton.addEventListener("click", search);
textSearch.addEventListener("input", search);