const botaoAgenda = document.querySelector(".agenda");
const menuAgenda = document.querySelector(".menu-agenda");

// Esconde o menu assim que a página carrega
menuAgenda.style.display = "none";

// Alterna o menu ao clicar no botão
botaoAgenda.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que o clique feche o menu imediatamente
  if (menuAgenda.style.display === "none") {
    menuAgenda.style.display = "flex"; // mantém a direção de coluna
    menuAgenda.style.flexDirection = "column";
  } else {
    menuAgenda.style.display = "none";
  }
});

// Fecha o menu ao clicar fora
document.addEventListener("click", (event) => {
  if (
    !menuAgenda.contains(event.target) &&
    !botaoAgenda.contains(event.target)
  ) {
    menuAgenda.style.display = "none";
  }
});
