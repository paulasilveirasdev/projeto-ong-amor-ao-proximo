const projetos = [
  {
    titulo: "Arrecadação de alimentos",
    descricao:
      "A ONG realiza campanhas para arrecadar alimentos não perecíveis, que são posteriormente organizados e distribuídos para famílias em situação de vulnerabilidade.",
    categoria: "campanhas",
  },
  {
    titulo: "Doação de roupas e materiais de higiene",
    descricao:
      "Também são arrecadadas roupas e materiais de higiene. As doações são separadas de acordo com as necessidades das pessoas atendidas e encaminhadas para as comunidades beneficiadas.",
    categoria: "campanhas",
  },
  {
    titulo: "Participação nas ações",
    descricao:
      "Pessoas interessadas podem participar das ações da ONG como voluntárias, contribuindo de acordo com suas habilidades, disponibilidade e interesses.",
    categoria: "voluntariado",
  },
  {
    titulo: "Atuação dos voluntários",
    descricao:
      "Os voluntários podem auxiliar na organização e distribuição de doações, participar de campanhas solidárias e colaborar em ações realizadas pela ONG junto às comunidades atendidas.",
    categoria: "voluntariado",
  },
];

const campanhas = document.getElementById("campanhas");
const voluntariado = document.getElementById("voluntariado");

if (campanhas && voluntariado) {
  projetos.forEach(function (projeto) {
    const artigo = `
      <article>
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
      </article>
    `;

    if (projeto.categoria === "campanhas") {
      campanhas.innerHTML += artigo;
    }

    if (projeto.categoria === "voluntariado") {
      voluntariado.innerHTML += artigo;
    }
  });
}
