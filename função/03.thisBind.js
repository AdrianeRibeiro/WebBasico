const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao) //this referencia pessoa
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
