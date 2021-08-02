let nome = 'Maju';
let sobrenome = 'Trevisan';

//Sem Template String
console.log(
    'Olá, eu sou ' +
    nome +
    ' ' +
    sobrenome
);

//Com Template String
console.log(
    `Com Template String: Olá, meu nome é ${nome} ${sobrenome}.`
);

console.log(`O resultado de 1 + 1 é: ${1 + 1}`);
console.log(`Objeto JSON: ${{ chave: 'valor' }}`);

let objeto = {
    chave: 'novo valor'
}