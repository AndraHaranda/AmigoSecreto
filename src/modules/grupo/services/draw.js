const draw = (integrantes) => {
  const integrantesEscolhidos = integrantes.map((item) => ({
    apelido: item.apelido,
    amigoSecreto: null,
    chosenByAnother: false,
  }));

  const members = integrantes.map((item) => item.apelido);

  for (let i = 0; i < integrantesEscolhidos.length; i++) {
    while (!integrantesEscolhidos[i].amigoSecreto) {
      const amigoSecreto = integrantesEscolhidos[Math.floor(Math.random() * integrantesEscolhidos.length)];

      if (
        integrantesEscolhidos[i].apelido === amigoSecreto.apelido || // SE O AMIGO NÃO FOR EU MESMO OU
        amigoSecreto.chosenByAnother
      ) {
        // SE O AMIGO CHOCOLATE JÁ NÃO FOI ESCOLHIDO
        continue;
      }

      integrantesEscolhidos[i].amigoSecreto = amigoSecreto.apelido;
      const amigoIndex = members.indexOf(amigoSecreto.apelido);
      integrantesEscolhidos[amigoIndex].chosenByAnother = true;
    }
  }

  const amigosOcultos = integrantesEscolhidos.map((item) => ({
    apelido: item.apelido,
    amigoOculto: item.amigoSecreto,
  }));

  return amigosOcultos;
};

module.exports = draw;
