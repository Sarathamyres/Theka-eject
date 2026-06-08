const closeDialog = document.querySelector(".close-dialog");
const addMaterial = document.getElementById("add-material");
const addition = document.querySelector(".addition");

addition.addEventListener("click", () => {
  addMaterial.showModal();
});
closeDialog.addEventListener("click", () => {
  addMaterial.close();
});
