function verificarCPF() {
    let cpf = document.getElementById('txtcpf').value;
    let soma = 0;
    let fator = 10;
    let divisao = 0;
    let restoDivisao = 0;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let digitoVerificador1 = 0;
    let digito1validade = false;
    let digitoVerificador2 = 0;
    let digito2validade = false;

    /** DÍGITO VERIFICADOR 1------------------------------------ */
    for (let i = 0; fator > 1; i++) {
        soma += cpf[i] * fator;
        fator--;
    }

    divisao = Math.floor(soma / 11);
    restoDivisao = soma - (11 * divisao);

    if (restoDivisao == 1 || restoDivisao == 0) {
        digitoVerificador1 = 0;
    } else {
        digitoVerificador1 = 11 - restoDivisao;
    }

    if(digitoVerificador1 == cpf[9]) {
        digito1validade = true;
    }

    /** DÍGITO VERIFICADOR 2------------------------------------ */
    fator = 11;
    soma = 0;
    divisao = 0;
    restoDivisao = 0;

    for (let i = 0; fator > 1; i++) {
        soma += cpf[i] * fator;
        fator--;
    }

    divisao = Math.floor(soma / 11);
    restoDivisao = soma - (11 * divisao);

    if (restoDivisao == 1 || restoDivisao == 0) {
        digitoVerificador2 = 0;
    } else {
        digitoVerificador2 = 11 - restoDivisao;
    }

    if(digitoVerificador2 == cpf[10]) {
        digito2validade = true;
    }

    if(digito1validade && digito2validade) {
        resultado.innerHTML += `<p>CPF VÁLIDO!</p>`;
    } else { 
        resultado.innerHTML += `<p>CPF INVÁLIDO!</p>`;
    }

}
