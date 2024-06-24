const calcular = document.getElementById("calcular");

function calculando() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resposta = document.getElementById("resposta");

    if (nome !== "" && altura !== "" && peso !== "") {
        let imc = (peso / (altura * altura)).toFixed(1);
        if (imc < 18.5) {
            resposta.textContent =
                nome + " seu IMC é de " + imc + " e você está abaixo do peso.";
        } else if (imc < 24.9) {
            resposta.textContent =
                nome + " seu IMC é de " + imc + " e você está no peso normal.";
        } else if (imc < 30) {
            resposta.textContent =
                nome + " seu IMC é de " + imc + " e você está acima do peso.";
        } else {
            resposta.textContent =
                nome + " seu IMC é de " + imc + " e você está obeso.";
        }
    } else {
        resposta.textContent = "Preencha todos os campos!";
    }
}

calcular.addEventListener("click", calculando);
