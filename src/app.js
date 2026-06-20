import Pessoa from "./models/Pessoa.js";
import Cachorro from "./models/Cachorro.js";
import Mamifero from "./models/Mamifero.js";
import Gato from "./models/Gato.js";

const cachorro1 = new Cachorro("Rex", 5, 20, "Labrador");
const pessoa1 = new Pessoa("Maria", 25, 60, "Engenheira");
const gato1 = new Gato("Mingau", 3, 4.5, "Branco");

cachorro1.emitirSom();
console.log('-------------------')
pessoa1.emitirSom();
console.log('-------------------')
gato1.emitirSom();