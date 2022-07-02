// Ejercicio 1
import './aboutme.js';
console.log('Ejercicio 1');


// Ejercicio 2
console.log('Como el fichero se importa en el index.js, se ejecuta este en primer lugar.')

// Ejercicio 3
let dev_tools = {
    elements: "Permite inspeccionar los elementos que componen la web.",
    console: "Permite ver el log de mensajes de salida.",
    source: "Permite ver archivos, ejecutar fragmentos, depurar codigo.",
    network: "Permite inspeccionar la actividad de la red, como recursos cargados o descargados.",
    performance: "Permite analizar el tendimiento del tiempo de ejecución.",
    memory: "Permite analizar el uso de la memoria y crear/gestionar perfiles de memoria."
};

console.log(dev_tools);

// Ejercicio 4
const  multiplos_7 = (number) =>{
    let  multiplos = [];
    for (let i = 0; i <= 100; i++){
        if (i%7 == 0){
            multiplos.push(i);
        }
    }
    return multiplos;
};

console.log(multiplos_7(100));

// Ejercicio 5
console.log(`<script type=”module”> corresponde a la declarativa del modo estricto, es decir, indica que contiene un script de modulo el cual puede usar import, export.`);

// Ejercicio 6
function formatter() {
    this.prefix = "Hello";
    this.append = function(phrase){
        console.log(`${this.prefix} ${phrase}`);
    }
};
let myFormatter = new formatter();
myFormatter.append("Nibaldo");

formatter.prototype.LowerPhrase = function(OtherPhrase){
    console.log(OtherPhrase.toLowerCase());
};

myFormatter.LowerPhrase("Hola Nibaldito, como estas?");