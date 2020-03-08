// pessoa -> 123 -> {...}

const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// vai dar erro. Só pode atribuir para constante só uma vez
//pessoa = { nome: 'Ana' }

//uma vez que o objeto está congelado não é possível mexer nele
Object.freeze(pessoa)
pessoa. nome = 'Maria'
console.log(pessoa.nome)
