
function aplicarTabelaPeriodica(){
  
  let tabela = '';
  const tabelaPeridica = document.querySelector('#tabelaPeriodica');
  
  tabela = '<table>';
  for (let linha = 1; linha<= 7; linha++) {
    // abre a tr
    tabela += '<tr>';
  
    for (let coluna = 1; coluna <= 18; coluna++){
      tabela += '<td>';
      tabela += `<div id="elemento">
                    <p id="num-atomico">1</p>
                    <p id="simbolo"><strong>H</strong></p>
                    <p id="nome">hidrogênio</p>
                    <p id="massa-atomica">1,008</p>
                </div>`;

      tabela += '</td>';
    }
    tabela += '</tr>';
  }
  tabela += '</table>';
  tabelaPeridica.innerHTML = tabela;


}


aplicarTabelaPeriodica();