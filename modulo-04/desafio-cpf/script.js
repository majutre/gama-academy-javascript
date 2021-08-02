function validacao(){
    console.log('Iniciando função de validação.');

    let cpf = document.getElementById('cpf_digitado').value;
    
    let resultadoDaValidacao = validaCpf(cpf);

    if (resultadoDaValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block'
    }
}

function validaCpf(cpf){
    console.log('Você digitou', cpf.length, 'caracteres.');
    if (cpf.length != 11) {
        return false;
    } else {
        let numeros = cpf.substring(0, 9);
        let digitos = cpf.substring(9);

        let soma = 0;
        for (let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log('SOMA:', soma);
        return true;
    }
}