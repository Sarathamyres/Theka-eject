const containerTeam = document.querySelectorAll(".sub-container-team");
let contador = 0;

containerTeam.forEach((team) => {
  team.addEventListener("click", () => {
    const image = team.querySelector(".team-img");
    if (!image) return;
    if (image.style.transform === "scale(1.7) translateY(-1rem)") {
      image.style.transform = "none";
      contador--;
    } else {
      image.style.transform = "scale(1.7) translateY(-1rem)";
      contador++;
    }
    console.log("Imagens abertas no momento:", contador);
  });
});
