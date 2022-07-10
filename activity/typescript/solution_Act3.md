# Actividad Sesion 3
## Soluciones

Todas las soluciones han sido incluidas en el archivo `./activity/typescript/index.html`.

### Ejercicio 1

- Crea una interfaz ``Person`` que tenga como atributos ``name``, ``age`` y ``profession``. Ahora define una arrow function que tenga como parámetro esta interfaz y que devuelva un array con el valor de sus propiedades, esta función tiene que tener tipado el parámetro de entrada y el return.

```typescript
interface Person {
  name: string;
  age: number | string;
  profession: string;
};

let ShowPerson = (person: Person) : any => {
  return Object.values(person);
};

const Nibaldo: Person = { name:"Nibaldo", 
                         age:34, 
                         profession:"Leader Actuarial Data Scientist" 
                        };

console.log(ShowPerson(Nibaldo))
```

### Ejercicio 2

- Escribe una función llamada ``sumOrConcatenate`` que acepte dos parámetros. Cada uno de estos parámetros podrá ser de tipo number o string. La función devolverá una suma si los dos parámetros son números, una concatenación con el símbolo - si son los dos strings o una cadena concatenadad con : si uno es un number y el otro string.

```typescript
function sumOrConcatenate(value1: any, value2: any) {
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    else if (typeof value1 === "string" && typeof value2 === "string") {
        return "".concat(value1, "-").concat(value2);
    }
    else {
        return "".concat(value1, ":").concat(value2);
    }
}

console.log(sumOrConcatenate(7, 8));
console.log(sumOrConcatenate(5, "HolaKeHace"));
console.log(sumOrConcatenate("Hola", "Nibaldito"));
```

### Ejercicio 3

- Crea dos interfaces, una llamada `Car` y otra ``Motorcycle``. La primera tendrá las propiedades ``tires(number)``, ``turnOnEngine()`` (función que devuelve void) y ``pressPedal()`` (función que devuelve void). La segunda tendrá las propiedades ``tires (number)``, ``turnOnEngine()`` (función que devuelve void) y ``openThrottle()`` (función que devuelve void). Escribe una función que acepte un parámetro que pueda ser ``Car`` o ``Motorcycle`` que, primero llame a ``turnOnEngine()``, y luego si es ``Car`` llame a ``pressPedal()`` pero si es ``Motorcycle`` llame a ``openThrottle()``.

```typescript
interface Car {
  tires: number;
  turnOnEngine: () => void;
  pressPedal: () => void;
};

interface Motorcycle {
  tires: number;
  turnOnEngine: () => void;
  OpenThrottle: () => void;
};

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Car).pressPedal !== undefined;
};

function runVehicle(vehicle: Car | Motorcycle){
  if (isCar(vehicle)) {
    vehicle.turnOnEngine();
    vehicle.pressPedal();
  } else {
    vehicle.turnOnEngine();
    vehicle.OpenThrottle();
  }
};

const Audi: Car = {
  tires: 2,
  turnOnEngine: () => {
    console.log("Run!")
  },
  pressPedal: () => {
    console.log("Slow Ruuun!")
  },
};

const HarleyDavidson: Motorcycle = {
  tires: 2,
  turnOnEngine: () => {
    console.log("Run Run!")
  },
  OpenThrottle: () => {
    console.log("Ruuuuun!")
  },
};

runVehicle(Audi);
runVehicle(HarleyDavidson);
```

### Ejercicio 4

Crea una función genérica, que acepte un array que pueda contener strings y numbers y devuelva el mismo array sin el primer elemento.

```typescript
function firstElement<T>(arr: T[]): T[] {
  return arr.slice(1);
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

firstElement(strArray);
firstElement(numArray);
firstElement(mixedArray);
firstElement(unsupportedArray);
```