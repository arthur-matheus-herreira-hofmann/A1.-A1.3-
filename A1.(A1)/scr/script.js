const catalogo = {
  "Ação": [
    { titulo: "Mad Max: Estrada da Fúria", ano: 2015, sinopse: "Pós-apocalipse com perseguições intensas.", duracao: "2h00", classificacao: "16+" },
    { titulo: "John Wick", ano: 2014, sinopse: "Um assassino em busca de vingança.", duracao: "1h41", classificacao: "16+" }
  ],
  "Comédia": [
    { titulo: "As Branquelas", ano: 2004, sinopse: "Agentes disfarçados em socialites.", duracao: "1h49", classificacao: "12+" },
    { titulo: "Se Beber, Não Case", ano: 2009, sinopse: "Uma festa que sai do controle.", duracao: "1h40", classificacao: "16+" }
  ],
  "Terror": [
    { titulo: "Invocação do Mal", ano: 2013, sinopse: "Casa assombrada e casos paranormais.", duracao: "1h52", classificacao: "16+" },
    { titulo: "It: A Coisa", ano: 2017, sinopse: "Um palhaço aterrorizante em uma cidade.", duracao: "2h15", classificacao: "16+" }
  ],
  "Ficção Científica": [
    { titulo: "Interestelar", ano: 2014, sinopse: "Viagem espacial em busca de sobrevivência.", duracao: "2h49", classificacao: "10+" },
    { titulo: "Matrix", ano: 1999, sinopse: "A realidade não é o que parece.", duracao: "2h16", classificacao: "14+" }
  ]
};

const app = document.getElementById("app");

function render() {
  app.innerHTML = "";

  for (let genero in catalogo) {
    const section = document.createElement("div");
    section.className = "genre";

    section.innerHTML = `<h2>${genero}</h2>`;

    const grid = document.createElement("div");
    grid.className = "grid";

    catalogo[genero].forEach(filme => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="title">${filme.titulo} (${filme.ano})</div>
        <div>${filme.sinopse}</div>
        <div class="meta">${filme.duracao} • ${filme.classificacao}</div>
      `;

      grid.appendChild(card);
    });

    section.appendChild(grid);
    app.appendChild(section);
  }
}

render();

