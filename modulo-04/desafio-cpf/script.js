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

//37142811854 - CPF de teste
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

        let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false
        }

        console.log(digitos.toString().charAt(0) + ' é a primeira posição da variável soma.');
        return true;
    }
}