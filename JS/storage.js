const formulario = document.querySelector(".formulario");
const toast = document.getElementById("toast");

if (formulario && toast) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const dadosColaborador = {
      nome,
      email,
    };

    localStorage.setItem("colaborador", JSON.stringify(dadosColaborador));

    toast.style.display = "block";

    setTimeout(function () {
      toast.style.display = "none";
    }, 3000);
  });
}

const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");

if (campoNome && campoEmail) {
  const dadosSalvos = localStorage.getItem("colaborador");

  if (dadosSalvos) {
    const dadosColaborador = JSON.parse(dadosSalvos);

    campoNome.value = dadosColaborador.nome;
    campoEmail.value = dadosColaborador.email;
  }
}
