// JSON é um formato textual. é um formato de dados
// são dados que estãos trafegando de uma aplicação a outra

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} } // não executa a função
console.log(JSON.stringify(obj))

//Json tem que ter aspas duplas. é o padrão
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) 

// {} -> objeto [] -> array
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) 
