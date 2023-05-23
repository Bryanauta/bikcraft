// Menu ativo
let pageUrl = window.location.href;
let menuItens = document.querySelectorAll(".header-menu a");

function verifyItem(item) {
  if (pageUrl.includes(item.href)) {
    item.classList.add("ativo");
  }
}

menuItens.forEach(verifyItem);

// Galeria
let bicicletaImagens = document.querySelectorAll(".bicicleta-imagens img");
let bicicletaImagemPrincipal = document.querySelector(".bicicleta-principal");
const bicicletaContainer = document.querySelector(".bicicleta-imagens");

function verifyBike(item) {
  item.addEventListener("click", () => {
    const img = item;

    const media = matchMedia("(min-width: 1000px)").matches;

    if (media) {
      bicicletaContainer.prepend(img);
    }
  });
}

bicicletaImagens.forEach(verifyBike);

// Formulário
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas
const perguntas = document.querySelectorAll(".perguntas button");

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", (event) => {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    pergunta.setAttribute(
      "aria-expanded",
      resposta.classList.contains("ativa")
    );
  });
}

perguntas.forEach(eventosPerguntas);

// Animacao
if (window.SimpleAnime) {
  new SimpleAnime();
}
