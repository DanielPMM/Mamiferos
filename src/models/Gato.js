import Mamifero from "./Mamifero.js";

class Gato extends Mamifero{
    cor;
    constructor(nome, idade, peso, cor){
        super(nome, idade, peso);
        this.cor = cor
    }

    emitirSom(){
         this.apresentacao();
        console.log('Miauuu')
    }
}

export default Gato;