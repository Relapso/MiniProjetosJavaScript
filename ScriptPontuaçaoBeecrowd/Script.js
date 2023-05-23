// ==UserScript==
// @name         BEECROWD point analist
// @namespace    http://tampermonkey.net/
// @version      1.1.1.1
// @description  Procurar os pontos dos alunos e seus nomes
// @author       Vinicius(relapso)
// @match        https://www.beecrowd.com.br/judge/pt/users/university/fho-uniararas 
// @icon         https://camo.githubusercontent.com/b21d347661a71f44bb85cb2b136935a8ebe9ccb82ad898022d75e9a6a833ca86/68747470733a2f2f7777772e62656563726f77642e636f6d2e62722f6a756467652f66617669636f6e2e69636f3f31363335303937303336
// @grant        none
// ==/UserScript==

//subsituta a pagina da sua organizaçao em @match

const tabelaElement = document.querySelector('#element table');

const linhasAlunos = tabelaElement.querySelectorAll('tbody tr');

linhasAlunos.forEach((linha) => {
  const nomeUsuario = linha.querySelector('td:nth-child(3) a').textContent;
  const pontos = linha.querySelector('td:nth-child(7)').textContent;
});

//coloque os dados da sua instituiçao aqui\\
const dadosPontuacao = {                 
  "csantbr": 2000,
  "ElGuigs": 4331.62,
  "vfdevenezio": 550,
  "aisha_petronilho": 1000
};
//----------------------------------------//
linhasAlunos.forEach((linha) => {
  const nomeUsuario = linha.querySelector('td:nth-child(3) a').textContent;
  const pontos = parseFloat(linha.querySelector('td:nth-child(7)').textContent.replace(".", "").replace(",", "."));

  if (dadosPontuacao[nomeUsuario] !== undefined) {
    const pontuacaoExistente = dadosPontuacao[nomeUsuario];
    const diferencaPontuacao = pontos - pontuacaoExistente;

    console.log(`diferença: ${nomeUsuario}: ${diferencaPontuacao.toFixed(2)}`);
  } else {
    console.log(`Não foram encontrados dados existentes para ${nomeUsuario}.`);
  }
});