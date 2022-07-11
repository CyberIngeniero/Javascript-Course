//  Ejercicio 1
var ShowPerson = function (person) {
    return Object.values(person);
};
var Nibaldo = {
    name: "Nibaldo",
    age: 34,
    profession: "Leader Actuarial Data Scientist"
};
console.log(ShowPerson(Nibaldo));


// Ejercicio 2
function sumOrConcatenate(value1, value2) {
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
;
;
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
;
function runVehicle(vehicle) {
    if (isCar(vehicle)) {
        vehicle.turnOnEngine();
        vehicle.pressPedal();
    }
    else {
        vehicle.turnOnEngine();
        vehicle.OpenThrottle();
    }
}
;
var Audi = {
    tires: 2,
    turnOnEngine: function () {
        console.log("Run!");
    },
    pressPedal: function () {
        console.log("Slow Ruuun!");
    }
};
var HarleyDavidson = {
    tires: 2,
    turnOnEngine: function () {
        console.log("Run Run!");
    },
    OpenThrottle: function () {
        console.log("Ruuuuun!");
    }
};
runVehicle(Audi);
runVehicle(HarleyDavidson);


//  Ejercicio 4
function firstElement(arr) {
    return arr.slice(1);
}
;
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
firstElement(strArray);
firstElement(numArray);
firstElement(mixedArray);
firstElement(unsupportedArray);
