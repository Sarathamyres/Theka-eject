const buttonsArrow = document.querySelectorAll(".arrow-button");
const gallery = document.querySelector(".gallery-carousel-container");
const galleryItem = document.querySelectorAll(
  ".gallery-carousel-container figure",
);

const images = document.querySelectorAll(
  ".gallery-carousel-container figure img",
);

fetch("https://thekaapi3.pythonanywhere.com/livros/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const booksList = data.results;
    booksList.forEach((book, indice) => {
      const tagImgHtml = images[indice];
      if (tagImgHtml) {
        tagImgHtml.src = book.capa;
      }
    });
  });

let index = 0;
buttonsArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (index === galleryItem.length) {
      index = 0;
    }
    if (index === 0) {
      galleryItem[0].style.zIndex = `${0}`;
      galleryItem[1].style.zIndex = `${4}`;
      galleryItem[2].style.zIndex = `${3}`;
      galleryItem[3].style.zIndex = `${2}`;
      galleryItem[4].style.zIndex = `${1}`;
    } else if (index === 1) {
      galleryItem[0].style.zIndex = `${1}`;
      galleryItem[1].style.zIndex = `${0}`;
      galleryItem[2].style.zIndex = `${4}`;
      galleryItem[3].style.zIndex = `${3}`;
      galleryItem[4].style.zIndex = `${2}`;
    } else if (index === 2) {
      galleryItem[0].style.zIndex = `${2}`;
      galleryItem[1].style.zIndex = `${1}`;
      galleryItem[2].style.zIndex = `${0}`;
      galleryItem[3].style.zIndex = `${2}`;
      galleryItem[4].style.zIndex = `${3}`;
    } else if (index === 3) {
      galleryItem[0].style.zIndex = `${3}`;
      galleryItem[1].style.zIndex = `${2}`;
      galleryItem[2].style.zIndex = `${0}`;
      galleryItem[3].style.zIndex = `${4}`;
      galleryItem[4].style.zIndex = `${1}`;
    } else if (index === 4) {
      galleryItem[0].style.zIndex = `${4}`;
      galleryItem[1].style.zIndex = `${3}`;
      galleryItem[2].style.zIndex = `${1}`;
      galleryItem[3].style.zIndex = `${0}`;
      galleryItem[4].style.zIndex = `${2}`;
    }
    index++;
  });
});
