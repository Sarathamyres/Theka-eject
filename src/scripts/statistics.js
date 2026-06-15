fetch(
  "https://thekaapi3.pythonanywhere.com/institucional/estatisticas-biblioteca/",
)
  .then((resposta) => resposta.json())
  .then((json) => {
    console.log(json);
    const data = json[0];

    document.getElementById("users-percentage").innerText = data.total_usuarios;
    document.getElementById("catalog-materials").innerText = data.total_livros;
    document.getElementById("collection-percentage").innerText =
      data.total_categorias;
  });
