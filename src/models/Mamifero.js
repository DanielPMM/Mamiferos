class Mamifero {
    nome;
    idade;
    peso;

    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;

    }

    comer(){
        // console.log(this.nome + 'esta comendo'); 
        console.log(`${this.nome} esta comendo`); 
    }

    dormir(){
        console.log(`${this.nome} esta dormindo`);
    }

    emitirSom(){
        console.log("Estou fazendo um SOM!!!");
    }

    apresentacao(){
        console.log("nome: ", this.nome);
        console.log("peso: ", this.peso);
        console.log("idade: ", this.idade);
    }

}

export default Mamifero;