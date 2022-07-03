// Ejercicio 1
let person = {
  name: "Nibaldo",
  age: 34,
  profession: "Leader Actuarial DS"
}

console.log(Object.values(person));

//----------------------------------------------------------------
// Ejercicio 2

// ---referencia al objeto, que contiene el método donde se invoca
let me = {
  name: "Nibaldo",
  edad: 34,
  speak: function () {
    console.log(this.name)
  }
};

me.speak();

// ---referencia al objeto al que se añade este método
let SayMyNameBaby = function (obj) {
  obj.speak = function () {
    console.log(this.name);
  }
};

const nibaldo = {
  name: "Nibaldito",
  age: 34,
};

SayMyNameBaby(nibaldo);
nibaldo.speak();


// ---referencia al objeto que contiene el método donde se invoca
let Person = function(nombre, edad, madre, padre) {
  return {
    name: nombre,
    age: edad,
    SayName: function () {
      console.log(this.name);
    },
    family: {
      mother: madre,
      father: padre,
      ShowMother: function () {
        console.log(Object.values(this.mother));
      },
      ShowFather: function () {
        console.log(Object.values(this.father));
      }
      },
    ShowFamily: function () {
        console.log(Object.values(this.family));
    }
  }
};

const nibaldo1 = Person("Nibaldito2",
                        34,
                        {name: "Alma",age:62},
                        {name: "Nibaldo",age:64}
                        );

nibaldo1.SayName();
nibaldo1.family.ShowMother();
nibaldo1.family.ShowFather();
nibaldo1.ShowFamily();

// ---call, apply & bind
const talkme = function(lang1, lang2, lang3) {
  console.log(`Hola! Mi nombre es ${this.name}
  y se programar en ${lang1}, ${lang2} y ${lang3}.`);
};

const nibaldo3 = {
  name: "Nibaldito3",
  age: 34
};

const languages = ["JavaScript", "Python", "C"]

// call hace referencia a this en su 1° param
talkme.call(nibaldo3, languages[0],languages[1],languages[2]);

// apply hace referencia a this en su 1° param
talkme.apply(nibaldo3, languages);

// bind devuelve una función en dónde this hace referencia al objeto que pasamos en su parámetro.
const TalkNibaldo = talkme.bind(nibaldo3, languages[0],languages[1],languages[2]);
TalkNibaldo();


// ---referencia al objeto que se instanciando
let Mascota = function(color, nombre, tipo) {
  this.color = color;
  this.name = nombre;
  this.type = tipo;
}

const Teo = new Mascota("Negro-Dorado", "Teo", "Perro");

console.log(Teo);


//----------------------------------------------------------------
// Ejercicio 3
class InvertirCadena {
  constructor (cadena = "") {
    this.cadenaInvertir = cadena;
  }
  InverseString =  () => {
    if (typeof this.cadenaInvertir.split("") !== 'undefined' &&
        this.cadenaInvertir.split("").length > 0){
      console.log(this.cadenaInvertir.split("").reverse().join(""));
    } else {
      console.log("throw error");
    }
  }
}

const invertirCadena = new InvertirCadena("Excelente");
invertirCadena.InverseString()


//----------------------------------------------------------------
// Ejercicio 4
class Login{
  constructor(user, password){
    this.admin = "admin";
    this.passAdmin = "passwd";
    this.user = user;
    this.password = password;
  }
  verifyAdmin = () => {
    if(this.admin === this.user && this.passAdmin === this.password){
      alert("Admin logged in")
      //console.log("Admin logged in")
    }else{
      alert("User or passwd incorrect")
      //console.log("User or passwd incorrect")
    }
  }
}

const login = new Login("admin", "passwd")
login.verifyAdmin();


//----------------------------------------------------------------
// Ejercicio 5
let LoginOk = function(button_id){
  this.button = document.getElementById(button_id);

  this.login = function(){
    if (button_id === "loginSuccess") {
      this.button.addEventListener("click", () => {
        alert("Login success!");
      });
    } else {
      this.button.addEventListener("click", () => {
        alert("Login failed!");
      });
    }
  };
}

const login_ok = new LoginOk("loginSuccess");
login_ok.login();

const login_fail = new LoginOk("loginFailure");
login_fail.login();


//----------------------------------------------------------------
// Ejercicio 6
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          reject(new Error ("Error: invalid username or password"));
        }
      }, 200);
    });
};

let LoginAsync = function(button_id, user, passw){
  this.button = document.getElementById(button_id);

  this.login = function(){
    this.button.addEventListener("click", async () => {
      try {
        const result = await loginWitUsername(user, passw);
        alert(result);
      } catch (err) {
        alert(err.message);
      }
    });
  };
}

const loginAsyncOk = new LoginAsync("loginSuccessAsync", "admin", "passwd");
loginAsyncOk.login();

const loginAsyncFail = new LoginAsync("loginFailureAsync", "other", "...");
loginAsyncFail.login();