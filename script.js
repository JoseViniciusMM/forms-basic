const inputFormulario = document.getElementById('#formulario');
const inputNome = document.getElementById('#nome');
const inputQtdDependentes = document.getElementById('#qtd_dependentes');
const inputDataNascimento = document.getElementById('#data_nascimento');
const inputDatetimeEvento = document.getElementById('#datetime_evento');
const inputObservacoes = document.getElementById('#observacoes');
const inputAceitosOsTermos = document.getElementById('#aceitos_os_termos');
const inputMasculino = document.getElementById('#masculino');
const inputFeminino = document.getElementById('#feminino');
const inputUf = document.getElementById('#uf');

const dadosFormulario = {
    nome: inputNome.value,
    qtdDependentes: parseInt(inputQtdDependentes.value),
    dataNascimento: inputDataNascimento.value,
    datetimeEvento: inputDatetimeEvento.value,
    observacoes: inputObservacoes.value,
    aceitosOsTermos: inputAceitosOsTermos.checked,
    sexo: inputMasculino.checked ? "Masculino" : "Feminino",
    uf: inputUf.value
}

//funcao limpar formulario 
function limparFormulario() {
    inputNome.value = '';
    inputQtdDependentes.value = '';
    inputDataNascimento.value = '';
    inputDatetimeEvento.value = '';
    inputObservacoes.value = '';
    inputAceitosOsTermos.checked = false;
    inputMasculino.checked = false;
    inputFeminino.checked = false;
    inputUf.value = '';
}

//funcao colocar informações dentro de um array
const arrayDadosFormulario = [];
function adicionarDadosFormulario() {
    arrayDadosFormulario.push(dadosFormulario);
    console.log(arrayDadosFormulario);
}


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(`Nome: ${inputNome.value}`);
    console.log(`aceitosOsTermos: ${inputAceitosOsTermos.checked ? 'Sim' : 'Não'}`);
    console.log(`Qtd. Dependentes: ${dadosFormulario.qtdDependentes}`);
    console.log(`Data de Nascimento: ${dadosFormulario.dataNascimento}`);
    console.log(`Data do Evento: ${dadosFormulario.datetimeEvento}`);
    console.log(`Observações: ${dadosFormulario.observacoes}`);
    console.log(`Sexo: ${dadosFormulario.sexo}`);
    console.log(`UF: ${dadosFormulario.uf}`);
})
