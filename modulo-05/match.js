const cpf = 'Meu CPF é 371.428.569-22';
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

// console.log(cpf.match('CPF'));
console.log(cpf.match(regex));