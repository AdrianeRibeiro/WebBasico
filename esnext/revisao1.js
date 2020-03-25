//let e const
{
  var a = 2
  let b = 3
  console.log(b)

}

//Uma variável declarada com var não tem escopo de bloco, ou seja, 
//posso acessá-la fora do bloco onde ela foi declarada.
//Já o let possui escopo de bloco
console.log(a)
//console.log(b)


//Template string
const produto = 'iPad'
console.log(`${produto}
é
caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9}
console.log(i, nome)
