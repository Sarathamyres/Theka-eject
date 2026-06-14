const imagesList = document.querySelectorAll(".image-book");
async function bookImages() {
  try {
    const response = await fetch(
      "https://thekaapi3.pythonanywhere.com/livros/",
    );
    const data = await response.json();
    const bookList = data.results;

    imagesList.forEach((imgTag, index) => {
      if (bookList[index]) {
        imgTag.src = bookList[index].capa;
        imgTag.alt = bookList[index].titulo;
      }
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}

bookImages();
