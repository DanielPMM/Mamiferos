import Mamifero from "./Mamifero.js";

class Cachorro extends Mamifero {
    raca;
    constructor(nome, idade, peso, raca){
        super(nome,idade,peso);
        this.raca = raca
    }
    
    emitirSom(){
        this.apresentacao();
        console.log('Au Au')
    }
}

export default Cachorro;