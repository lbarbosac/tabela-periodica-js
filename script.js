
function aplicarTabelaPeriodica() {

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
                      <p id="num-atomico">1</p>
                      <p id="simbolo"><strong>H</strong></p>
                      <p id="nome">hidrogênio</p>
                      <p id="massa-atomica">1,008</p>
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
                      <p id="simbolo"><strong>B</strong></p>
                      <p id="nome">Barbosa</p>
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
