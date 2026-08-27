const mesAno = document.getElementById("mes-ano");
const diasGrid = document.querySelector(".dias-grid");
const botaoAnterior = document.getElementById("mes-anterior");
const botaoProximo = document.getElementById("proximo-mes");

const painelInfo = document.getElementById("painel-info");
const infoData = document.getElementById("info-data");
const infoStatus = document.getElementById("info-status");
const infoFeriado = document.getElementById("info-feriado");

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

const dadosCalendario = {


    "2026-01-01": {
        feriado: "Confraternização Universal",
        disponivel: false
    },

    "2026-02-16": {
        feriado: "Carnaval (Segunda-feira)",
        disponivel: false
    },

    "2026-02-17": {
        feriado: "Carnaval (Terça-feira)",
        disponivel: false
    },

    "2026-02-18": {
        feriado: "Quarta-feira de Cinzas",
        disponivel: false
    },

    "2026-04-03": {
        feriado: "Sexta-feira Santa",
        disponivel: false
    },

    "2026-04-21": {
        feriado: "Tiradentes",
        disponivel: false
    },

    "2026-05-01": {
        feriado: "Dia do Trabalho",
        disponivel: false
    },

    "2026-06-04": {
        feriado: "Corpus Christi",
        disponivel: false
    },

    "2026-06-29": {
        feriado: "Dia de São Paulo (Padroeiro de Muriaé)",
        disponivel: false
    },

    "2026-09-07": {
        feriado: "Independência do Brasil",
        disponivel: false
    },

    "2026-10-12": {
        feriado: "Nossa Senhora Aparecida",
        disponivel: false
    },

    "2026-11-02": {
        feriado: "Finados",
        disponivel: false
    },

    "2026-11-15": {
        feriado: "Proclamação da República",
        disponivel: false
    },

    "2026-11-20": {
        feriado: "Dia da Consciência Negra",
        disponivel: false
    },

    "2026-12-25": {
        feriado: "Natal",
        disponivel: false
    },


    "2027-01-01": {
        feriado: "Confraternização Universal",
        disponivel: false
    },

    "2027-02-08": {
        feriado: "Carnaval (Segunda-feira)",
        disponivel: false
    },

    "2027-02-09": {
        feriado: "Carnaval (Terça-feira)",
        disponivel: false
    },

    "2027-02-10": {
        feriado: "Quarta-feira de Cinzas",
        disponivel: false
    },

    "2027-03-26": {
        feriado: "Sexta-feira Santa",
        disponivel: false
    },

    "2027-04-21": {
        feriado: "Tiradentes",
        disponivel: false
    },

    "2027-05-01": {
        feriado: "Dia do Trabalho",
        disponivel: false
    },

    "2027-05-27": {
        feriado: "Corpus Christi",
        disponivel: false
    },

    "2027-06-29": {
        feriado: "Dia de São Paulo (Padroeiro de Muriaé)",
        disponivel: false
    },

    "2027-09-07": {
        feriado: "Independência do Brasil",
        disponivel: false
    },

    "2027-10-12": {
        feriado: "Nossa Senhora Aparecida",
        disponivel: false
    },

    "2027-11-02": {
        feriado: "Finados",
        disponivel: false
    },

    "2027-11-15": {
        feriado: "Proclamação da República",
        disponivel: false
    },

    "2027-11-20": {
        feriado: "Dia da Consciência Negra",
        disponivel: false
    },

    "2027-12-25": {
        feriado: "Natal",
        disponivel: false
    },


    "2028-01-01": {
        feriado: "Confraternização Universal",
        disponivel: false
    },

    "2028-02-28": {
        feriado: "Carnaval (Segunda-feira)",
        disponivel: false
    },

    "2028-02-29": {
        feriado: "Carnaval (Terça-feira)",
        disponivel: false
    },

    "2028-03-01": {
        feriado: "Quarta-feira de Cinzas",
        disponivel: false
    },

    "2028-04-14": {
        feriado: "Sexta-feira Santa",
        disponivel: false
    },

    "2028-04-21": {
        feriado: "Tiradentes",
        disponivel: false
    },

    "2028-05-01": {
        feriado: "Dia do Trabalho",
        disponivel: false
    },

    "2028-06-15": {
        feriado: "Corpus Christi",
        disponivel: false
    },

    "2028-06-29": {
        feriado: "Dia de São Paulo (Padroeiro de Muriaé)",
        disponivel: false
    },

    "2028-09-07": {
        feriado: "Independência do Brasil",
        disponivel: false
    },

    "2028-10-12": {
        feriado: "Nossa Senhora Aparecida",
        disponivel: false
    },

    "2028-11-02": {
        feriado: "Finados",
        disponivel: false
    },

    "2028-11-15": {
        feriado: "Proclamação da República",
        disponivel: false
    },

    "2028-11-20": {
        feriado: "Dia da Consciência Negra",
        disponivel: false
    },

    "2028-12-25": {
        feriado: "Natal",
        disponivel: false
    },

    "2029-01-01": {
        feriado: "Confraternização Universal",
        disponivel: false
    },

    "2029-02-12": {
        feriado: "Carnaval (Segunda-feira)",
        disponivel: false
    },

    "2029-02-13": {
        feriado: "Carnaval (Terça-feira)",
        disponivel: false
    },

    "2029-02-14": {
        feriado: "Quarta-feira de Cinzas",
        disponivel: false
    },

    "2029-03-30": {
        feriado: "Sexta-feira Santa",
        disponivel: false
    },

    "2029-04-21": {
        feriado: "Tiradentes",
        disponivel: false
    },

    "2029-05-01": {
        feriado: "Dia do Trabalho",
        disponivel: false
    },

    "2029-05-31": {
        feriado: "Corpus Christi",
        disponivel: false
    },

    "2029-06-29": {
        feriado: "Dia de São Paulo (Padroeiro de Muriaé)",
        disponivel: false
    },

    "2029-09-07": {
        feriado: "Independência do Brasil",
        disponivel: false
    },

    "2029-10-12": {
        feriado: "Nossa Senhora Aparecida",
        disponivel: false
    },

    "2029-11-02": {
        feriado: "Finados",
        disponivel: false
    },

    "2029-11-15": {
        feriado: "Proclamação da República",
        disponivel: false
    },

    "2029-11-20": {
        feriado: "Dia da Consciência Negra",
        disponivel: false
    },

    "2029-12-25": {
        feriado: "Natal",
        disponivel: false
    },


    "2030-01-01": {
        feriado: "Confraternização Universal",
        disponivel: false
    },

    "2030-03-04": {
        feriado: "Carnaval (Segunda-feira)",
        disponivel: false
    },

    "2030-03-05": {
        feriado: "Carnaval (Terça-feira)",
        disponivel: false
    },

    "2030-03-06": {
        feriado: "Quarta-feira de Cinzas",
        disponivel: false
    },

    "2030-04-19": {
        feriado: "Sexta-feira Santa",
        disponivel: false
    },

    "2030-04-21": {
        feriado: "Tiradentes",
        disponivel: false
    },

    "2030-05-01": {
        feriado: "Dia do Trabalho",
        disponivel: false
    },

    "2030-06-20": {
        feriado: "Corpus Christi",
        disponivel: false
    },

    "2030-06-29": {
        feriado: "Dia de São Paulo (Padroeiro de Muriaé)",
        disponivel: false
    },

    "2030-09-07": {
        feriado: "Independência do Brasil",
        disponivel: false
    },

    "2030-10-12": {
        feriado: "Nossa Senhora Aparecida",
        disponivel: false
    },

    "2030-11-02": {
        feriado: "Finados",
        disponivel: false
    },

    "2030-11-15": {
        feriado: "Proclamação da República",
        disponivel: false
    },

    "2030-11-20": {
        feriado: "Dia da Consciência Negra",
        disponivel: false
    },

    "2030-12-25": {
        feriado: "Natal",
        disponivel: false
    }
};


function gerarCalendario() {

    diasGrid.innerHTML = "";

    mesAno.textContent = `${nomesMeses[mesAtual]} de ${anoAtual}`;

    const primeiroDia = new Date(anoAtual, mesAtual, 1);
    const ultimoDia = new Date(anoAtual, mesAtual + 1, 0);

    const diaSemanaInicio = primeiroDia.getDay();
    const quantidadeDias = ultimoDia.getDate();


    
    for (let i = 0; i < diaSemanaInicio; i++) {

        const vazio = document.createElement("div");

        vazio.classList.add("dia", "vazio");

        diasGrid.appendChild(vazio);
    }


    for (let dia = 1; dia <= quantidadeDias; dia++) {

        const elementoDia = document.createElement("button");

        elementoDia.type = "button";

        elementoDia.classList.add("dia");

        elementoDia.textContent = dia;


        const dataAtualLoop = new Date(
            anoAtual,
            mesAtual,
            dia
        );

        const diaSemana = dataAtualLoop.getDay();


        if (diaSemana === 0 || diaSemana === 6) {

            elementoDia.classList.add("domingo");

        }

        const mesFormatado = String(
            mesAtual + 1
        ).padStart(2, "0");

        const diaFormatado = String(
            dia
        ).padStart(2, "0");

        const chaveData =
            `${anoAtual}-${mesFormatado}-${diaFormatado}`;


        const infoDia = dadosCalendario[chaveData];


        if (infoDia) {

            if (infoDia.feriado) {

                elementoDia.classList.add("feriado");

            }

            if (infoDia.disponivel === true) {

                elementoDia.classList.add("disponivel");

            } else if (infoDia.disponivel === false) {

                elementoDia.classList.add("indisponivel");

            }

        }

        const ehHoje =
            dia === hoje.getDate() &&
            mesAtual === hoje.getMonth() &&
            anoAtual === hoje.getFullYear();


        if (ehHoje) {

            elementoDia.classList.add("hoje");

        }

        if (
            diaSelecionado &&
            diaSelecionado.dia === dia &&
            diaSelecionado.mes === mesAtual &&
            diaSelecionado.ano === anoAtual
        ) {

            elementoDia.classList.add("selecionado");

        }

        elementoDia.addEventListener("click", () => {

            diaSelecionado = {

                dia,
                mes: mesAtual,
                ano: anoAtual

            };

            document
                .querySelectorAll(".dia.selecionado")
                .forEach(item => {

                    item.classList.remove("selecionado");

                });


            elementoDia.classList.add("selecionado");


            painelInfo.style.display = "block";

            infoData.textContent =
                `${dia} de ${nomesMeses[mesAtual]} de ${anoAtual}`;

            if (infoDia) {

                infoStatus.innerHTML =
                    `<strong>Disponibilidade:</strong> ${
                        infoDia.disponivel
                            ? "Disponível"
                            : "Indisponível"
                    }`;

                infoFeriado.innerHTML =
                    `<strong>Feriado:</strong> ${
                        infoDia.feriado
                    }`;

            }

            else if (diaSemana === 0 || diaSemana === 6) {

                infoStatus.innerHTML =
                    `<strong>Disponibilidade:</strong> Indisponível (Fim de semana)`;

                infoFeriado.innerHTML =
                    `<strong>Feriado:</strong> Nenhum feriado registrado`;

            }

            else {

                infoStatus.innerHTML =
                    `<strong>Disponibilidade:</strong> Disponível (Padrão)`;

                infoFeriado.innerHTML =
                    `<strong>Feriado:</strong> Nenhum feriado registrado`;

            }

        });


        diasGrid.appendChild(elementoDia);

    }

}

botaoAnterior.addEventListener("click", () => {

    mesAtual--;

    if (mesAtual < 0) {

        mesAtual = 11;

        anoAtual--;

    }

    gerarCalendario();

});

botaoProximo.addEventListener("click", () => {

    mesAtual++;

    if (mesAtual > 11) {

        mesAtual = 0;

        anoAtual++;

    }

    gerarCalendario();

});

gerarCalendario();
