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

//menu mobile
const menuBtn = document.querySelector(".menu");
const menuHamburger = document.querySelector(".menu-hamburger");

// Alterna menu ao clicar no hamburger
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuHamburger.style.display =
    menuHamburger.style.display === "flex" ? "none" : "flex";
});

// Fecha menu ao clicar fora
document.addEventListener("click", (e) => {
  if (!menuHamburger.contains(e.target) && !menuBtn.contains(e.target)) {
    menuHamburger.style.display = "none";
  }
});

// Seleciona botão e menu mobile
const botaoAgendaMobile = document.querySelector(".agenda-mobile .agenda");
const menuAgendaMobile = document.querySelector(".menu-agenda-mobile");

botaoAgendaMobile.addEventListener("click", (e) => {
  e.stopPropagation();
  menuAgendaMobile.style.display =
    menuAgendaMobile.style.display === "flex" ? "none" : "flex";
});

// Fecha ao clicar fora
document.addEventListener("click", (e) => {
  if (
    !menuAgendaMobile.contains(e.target) &&
    !botaoAgendaMobile.contains(e.target)
  ) {
    menuAgendaMobile.style.display = "none";
  }
});
