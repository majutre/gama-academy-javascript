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
    return false;
}