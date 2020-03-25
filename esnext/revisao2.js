//arrow function
//são funções anonimas. Não possuem um valor
// vc as cria e atribui elas a uma variável

const soma = (a, b) => a + b

const soma2 = (c, d) => {
  return c + d
}

console.log(soma(2, 3))
console.log(soma2(2, 3))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default
function log(texto = 'Node') {
  console.log(texto)
}

log()
log('Node2')

//operador rest
// ...numeros -> é um arrary
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}

console.log(total(2,3,4,5))