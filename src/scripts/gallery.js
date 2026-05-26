const buttonsArrow = document.querySelectorAll(".arrow-button");
const gallery = document.querySelector(".gallery-carousel-container");
const galleryItem = document.querySelectorAll(
  ".gallery-carousel-container figure",
);
let index = 0;
buttonsArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (index === galleryItem.length) {
      index = 0;
    }
    if (index === 0) {
      galleryItem[1].style.zIndex = `${2}`;
      galleryItem[2].style.zIndex = `${1}`;
      galleryItem[0].style.zIndex = `${0}`;
    } else if (index === 1) {
      galleryItem[1].style.zIndex = `${0}`;
      galleryItem[2].style.zIndex = `${2}`;
      galleryItem[0].style.zIndex = `${1}`;
    } else if (index === 2) {
      galleryItem[1].style.zIndex = `${1}`;
      galleryItem[2].style.zIndex = `${0}`;
      galleryItem[0].style.zIndex = `${2}`;
    }
    index++;
  });
});
