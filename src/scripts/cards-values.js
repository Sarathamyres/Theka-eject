// ao dar um console.log(data) encontrei uma lista vazia. Ou seja, as descrições de "nossos valores" não estavam lá, por isso, deixei o código mockado.

async function textBack() {
  try {
    const response = await fetch(
      "https://thekaapi3.pythonanywhere.com/institucional/nossos-valores/",
    );
    let data = await response.json();

    if (data.length == 0) {
      data = [
        {
          descricao:
            "Acreditamos que o conhecimento deve ser compartilhado. Nossa biblioteca é aberta e inclusiva, um espaço onde todos podem aprender, descobrir e se sentir bem vindos.",
        },
        {
          descricao:
            "Mais do que livros, cultivamos experiências. Valorizamos a leitura como ferramenta de inspiração, crescimento e ransformação",
        },
        {
          descricao:
            "Somos mais que estantes: somos um ponto de encontro. Aqui, cada pessoa pode aprender, ensinar e construir junto uma rede de saberes e culturas.",
        },
      ];
    }
    const paragraphBack = document.querySelectorAll(
      ".box-values .back .card-text",
    );
    paragraphBack.forEach((paragraph, index) => {
      if (data[index]) {
        paragraph.textContent = data[index].descricao;
      }
    });
  } catch (error) {
    console.error("Erro ao buscar o texto da API:", error);
  }
}
textBack();
