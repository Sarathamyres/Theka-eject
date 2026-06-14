const bookItems = document.querySelectorAll(".collection-books_list > li");

async function bookImages() {
  try {
    const response = await fetch(
      "https://thekaapi3.pythonanywhere.com/livros/",
    );
    const data = await response.json();
    const bookList = data.results;

    bookItems.forEach((lisItem, index) => {
      if (bookList[index]) {
        // 1. Capa
        const imgTag = lisItem.querySelector(".image-book");
        if (imgTag) {
          imgTag.src = bookList[index].capa;
          imgTag.alt = bookList[index].titulo;
        }

        // 2. Título
        const titleTag = lisItem.querySelector("figcaption strong");
        if (titleTag) {
          titleTag.textContent = bookList[index].titulo;
        }

        // 3. Autor
        const authorTag = lisItem.querySelector("figcaption p");
        if (authorTag) {
          authorTag.textContent = bookList[index].autor;
        }
      } 
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}

bookImages();
