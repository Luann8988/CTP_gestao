const mesAno = document.getElementById("mes-ano");
const diasGrid =  document.querySelector(".dias-grid");
const botaoAnterior = document.getElementById("mes-anterior");
const botaoProximo = document.getElementById("proximo-mes");

const hoje = new Date();

let mesAtual = hoje.getMonth();
let anoAtual = hoje.getFullYear();
let diaSelecionado = null;

const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];
