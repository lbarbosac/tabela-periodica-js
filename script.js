
function aplicarTabelaPeriodica(elementos) {
  const tabelaPeriodica = document.querySelector('#tabelaPeriodica');
  let tabela = '<table>';

  for (let linha = 1; linha <= 10; linha++) {
    tabela += '<tr>';

    for (let coluna = 1; coluna <= 18; coluna++) {
      // Busca o elemento com a linha e coluna correspondentes
      const elemento = elementos.find(el => el.linha == linha && el.coluna == coluna);

      tabela += '<td>';
      if (elemento) {
        tabela += `<div class="elemento" style="background-color: ${elemento.corGrupo};">
            <p class="num-atomico">${elemento.numeroAtomico}</p>
            <p class="simbolo"><strong>${elemento.simbolo}</strong></p>
            <p class="nome">${elemento.nome}</p>
            <p class="massa-atomica">${elemento.massaAtomica}</p>
          </div>`;
      } else {
        tabela += '';
      }
      tabela += '</td>';
    }

    tabela += '</tr>';
  }

  tabela += '</table>';
  tabelaPeriodica.innerHTML = tabela;
}

aplicarTabelaPeriodica(colecaoElementos);

// Parte de colocar dados quando clica no elemento

function aplicarEventosNosElementos(elementos) {
  const divs = document.querySelectorAll('.elemento');

  divs.forEach(div => {
    const numAtomico = div.querySelector('.num-atomico').innerText;
    const elemento = elementos.find(el => el.numeroAtomico == numAtomico);

    div.addEventListener('click', () => {
      preencherModal(elemento);
    });
  });
}

function preencherModal(elemento) {
  // quando clica em um elemento da tabela, aparece o modal e a tabela vai para esquerda
  const tabelaPeriodica = document.querySelector('#tabelaPeriodica');
  tabelaPeriodica.style.justifyContent = 'left';
  const modal = document.querySelector('#modalDados');
  modal.style.display = 'flex';

  // Se o valor do dado for inexistente (undefined, null ou vazio), mostra "sem informações" no lugar
  document.querySelector('#nome').innerHTML = `${elemento.nome || "sem informações"}<sup id="num-atomico">${elemento.numeroAtomico || ""}</sup>`;
  document.querySelector('#simbolo').innerHTML = `<p class="identifica-dados">Símbolo:</p> ${elemento.simbolo || "sem informações"}`;
  document.querySelector('#massa-atomica').innerHTML = `<p class="identifica-dados">Massa atômica:</p> ${elemento.massaAtomica || "sem informações"}`;
  document.querySelector('#ano-descoberda').innerHTML = `<p class="identifica-dados">Ano de descoberta:</p> ${elemento.anoDeDescoberta || "sem informações"}`;
  document.querySelector('#grupo').innerHTML = `<p class="identifica-dados">Grupo:</p> ${elemento.grupo || "sem informações"}`;
  document.querySelector('#estado-padrao').innerHTML = `<p class="identifica-dados">Estado padrão:</p> ${elemento.estadoPadrao || "sem informações"}`;
  document.querySelector('#tipo-ligacao').innerHTML = `<p class="identifica-dados">Tipo de ligação:</p> ${elemento.tipoDeLigacao || "sem informações"}`;
  document.querySelector('#afinidade-eletrica').innerHTML = `<p class="identifica-dados">Afinidade elétrica:</p> ${elemento.afinidadeEletronica || "sem informações"}`;
  document.querySelector('#eletronegatividade').innerHTML = `<p class="identifica-dados">Eletronegatividade:</p> ${elemento.eletronegatividade || "sem informações"}`;
  document.querySelector('#ponto-fusao').innerHTML = `<p class="identifica-dados">Ponto de fusão:</p> ${elemento.pontoDeFusao || "sem informações"}`;
  document.querySelector('#config-eletronica').innerHTML = `<p class="identifica-dados">Configuração eletrônica:</p> ${elemento.configuracaoEletronica || "sem informações"}`;


}

aplicarTabelaPeriodica(colecaoElementos);
aplicarEventosNosElementos(colecaoElementos);


