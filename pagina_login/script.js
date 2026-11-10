
let mediaCalculada = false;
let media = 0;

function obterDados() {
    let nome = document.getElementById("nome").value.trim();
    let campo1 = document.getElementById("nota1").value;
    let campo2 = document.getElementById("nota2").value;

    let nota1 = Number(campo1);
    let nota2 = Number(campo2);

    if (nome === "" || campo1 === "" || campo2 === "") {
        mostrarErro("Preencha o nome e as duas notas!");
        return null;
    }

    if (!Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10) {

        mostrarErro("Erro! As notas devem estar entre 0 e 10.");
        return null;
    }

    return {
        nome: nome,
        nota1: nota1,
        nota2: nota2
    };
}

function calcularMedia() {
    let aluno = obterDados();

    if (aluno === null) {
        mediaCalculada = false;
        return;
    }

    media = (aluno.nota1 + aluno.nota2) / 2;
    mediaCalculada = true;

    document.getElementById("resultado").innerHTML =
        "<strong>Nome do aluno:</strong> " + aluno.nome +
        "<br><strong>Média obtida:</strong> " +
        media.toFixed(2);
}

function mostrarSituacao() {
    let aluno = obterDados();

    if (aluno === null) {
        mediaCalculada = false;
        return;
    }

    media = (aluno.nota1 + aluno.nota2) / 2;
    mediaCalculada = true;

    let situacao;
    let classe;

    if (media >= 6) {
        situacao = "APROVADO";
        classe = "aprovado";
    } else {
        situacao = "REPROVADO";
        classe = "reprovado";
    }

    document.getElementById("resultado").innerHTML =
        "<strong>Nome do aluno:</strong> " + aluno.nome +
        "<br><strong>Média obtida:</strong> " +
        media.toFixed(2) +
        "<br><strong>Situação:</strong> " +
        '<span class="' + classe + '">' +
        situacao + "</span>";
}

function mostrarErro(mensagem) {
    document.getElementById("resultado").innerHTML =
        '<span class="erro">' + mensagem + "</span>";
}

function limparCampos() {
    document.getElementById("formulario").reset();

    document.getElementById("resultado").innerHTML =
        "Preencha os dados e obtenha o Resultado.";

    mediaCalculada = false;
    media = 0;
}

function atualizarDataHora() {
    let agora = new Date();

    document.getElementById("dataHora").textContent =
        "Data e hora: " +
        agora.toLocaleDateString("pt-BR") + " às " +
        agora.toLocaleTimeString("pt-BR");
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);
