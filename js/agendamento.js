document.addEventListener("DOMContentLoaded", () => {
  // 1. Preencher Select de ANIMAIS
  const animais = ["Cachorro", "Gato", "Pássaro", "Coelho", "Outros"];
  const selectAnimal = document.getElementById("select-animal");

  animais.forEach((animal) => {
    const option = document.createElement("option");
    option.value = animal.toLowerCase();
    option.textContent = animal;
    selectAnimal.appendChild(option);
  });

  // 2. Preencher Select de HORÁRIOS
  // horários das 08:00 às 18:00
  const selectHora = document.getElementById("select-hora");
  const horarioInicio = 8;
  const horarioFim = 18;

  for (let i = horarioInicio; i <= horarioFim; i++) {
    const horaFormatada = i < 10 ? `0${i}:00` : `${i}:00`;
    const option = document.createElement("option");
    option.value = horaFormatada;
    option.textContent = horaFormatada;
    selectHora.appendChild(option);
  }

  // 3. Preencher Select de DATAS (Próximos 14 dias)
  const selectData = document.getElementById("select-data");
  const hoje = new Date();

  for (let i = 0; i < 14; i++) {
    const dataFutura = new Date();
    dataFutura.setDate(hoje.getDate() + i);

    // Formata dia e mês (ex: 15/05)
    const dia = String(dataFutura.getDate()).padStart(2, "0");
    const mes = String(dataFutura.getMonth() + 1).padStart(2, "0");
    const dataFormatada = `${dia}/${mes}`;

    const option = document.createElement("option");
    option.value = dataFormatada;
    option.textContent = dataFormatada;
    selectData.appendChild(option);
  }

  // (Opcional) Ação no Botão de Agendar
  const btnAgendar = document.querySelector(".btn-agendar");
  btnAgendar.addEventListener("click", (e) => {
    e.preventDefault(); // Evita recarregar a página
    alert("Agendamento realizado com sucesso! (Simulação)");
  });
});
