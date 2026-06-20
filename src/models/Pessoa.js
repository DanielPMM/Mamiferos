import Mamifero from "./Mamifero.js";

class Pessoa extends Mamifero {
    profissao;
    constructor(nome, idade, peso, profissao){
        super(nome,idade,peso);
        this.profissao = profissao;
    }

    emitirSom(){
        this.apresentacao();
        console.log('Olá')
    }
}

export default Pessoa;