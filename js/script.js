const botaoAgenda = document.querySelector(".agenda");
const menuAgenda = document.querySelector(".menu-agenda");

// Alternar o menu quando clicar no botão
botaoAgenda.addEventListener("click", () => {
  if (menuAgenda.style.display === "none" || menuAgenda.style.display === "") {
    menuAgenda.style.display = "block";
  } else {
    menuAgenda.style.display = "none";
  }
});

// Fechar menu ao clicar fora
document.addEventListener("click", (event) => {
  // Se o clique NÃO for dentro do menu e NÃO no botão → fecha
  if (
    !menuAgenda.contains(event.target) &&
    !botaoAgenda.contains(event.target)
  ) {
    menuAgenda.style.display = "none";
  }
});
