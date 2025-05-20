/*
function aplicarTabelaPeriodica(elementos) {

    let tabela = '';
    const tabelaPeridica = document.querySelector('#tabelaPeriodica');
  
    tabela = '<table>';
    for (let linha = 1; linha <= 7; linha++) {
      // abre a tr
      tabela += '<tr>';
  
      for (let coluna = 1; coluna <= 18; coluna++) {
        // abre a td
        tabela += '<td>';
        tabela += `<div id="elemento">
                      <p id="num-atomico">${colecaoElementos.numeroAtomico}</p>
                      <p id="simbolo"><strong>${colecaoElementos.simbolo}</strong></p>
                      <p id="nome">${colecaoElementos.nome}</p>
                      <p id="massa-atomica">${colecaoElementos.massaAtomica}</p>
                  </div>`;
        // fecha a td
        tabela += '</td>';
      }
      // fecha a tr
      tabela += '</tr>';
    }
    tabela += '</table>';
    tabelaPeridica.innerHTML = tabela;
  }
  
  aplicarTabelaPeriodica();
  
  function aplicarTabelaPeriodicaInferior() {
    let tabelaInferior = '';
    const tabelaPeridicaInferior = document.querySelector('#tabelaPeriodicaInferior');
  
    tabelaInferior = '<table>';
    for (let linha = 1; linha <= 2; linha++){
      tabelaInferior += '<tr>';
      for (let coluna = 1; coluna <= 15; coluna++) {
        tabelaInferior += '<td>';
        tabelaInferior += `<div id="elemento">
                      <p id="num-atomico">2</p>
                      <p id="simbolo"><strong>T</strong></p>
                      <p id="nome">TTTTTT</p>
                      <p id="massa-atomica">1,23</p>
                  </div>`;
        tabelaInferior += '</td>';
      }
      tabelaInferior += '</tr>';
    }
    tabelaInferior += '</table>';
    tabelaPeridicaInferior.innerHTML = tabelaInferior;
  }

  aplicarTabelaPeriodicaInferior()

  function colocarInfos() {
    document.querySelector('#num-atomico').innerHTML = `${colecaoElementos.numeroAtomico}`;
    document.querySelector('#simbolo').innerHTML = `${colecaoElementos.simbolo}`;
    document.querySelector('#nome').innerHTML = `${colecaoElementos.nome}`;
    document.querySelector('#massa-atomica').innerHTML = `${colecaoElementos.massaAtomica}`;
  }

  colocarInfos();
  */

  function aplicarTabelaPeriodica(elementos) {
    const tabelaPeriodica = document.querySelector('#tabelaPeriodica');
    let tabela = '<table>';
  
    for (let linha = 1; linha <= 7; linha++) {
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
          tabela += ''; // célula vazia
        }
        tabela += '</td>';
      }
  
      tabela += '</tr>';
    }
  
    tabela += '</table>';
    tabelaPeriodica.innerHTML = tabela;
  }
  
  // Chame a função passando a array
  aplicarTabelaPeriodica(colecaoElementos);
  