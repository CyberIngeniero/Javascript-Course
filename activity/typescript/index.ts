// Ejercicio 1
interface Person {
    name: string;
    age: number | string;
    profession: string;
};

let ShowPerson = (person: Person) : any => {
    return Object.values(person);
};

const Nibaldo: Person = {
    name:"Nibaldo",
    age:34,
    profession:"Leader Actuarial Data Scientist"
};

console.log(ShowPerson(Nibaldo))


// Ejercicio 2

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


// Ejercicio 3

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


//  Ejercicio 4

function firstElement<T>(arr: T[]): T[] {
    return arr.slice(1);
};

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

firstElement(strArray);
firstElement(numArray);
firstElement(mixedArray);
firstElement(unsupportedArray);