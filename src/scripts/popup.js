const closeDialog = document.getElementById("cancel");
const addMaterial = document.getElementById("add-material");
const addition = document.querySelector(".addition");

addition.addEventListener("click", () => {
  addMaterial.showModal();
});
closeDialog.addEventListener("click", () => {
  addMaterial.close();
});
