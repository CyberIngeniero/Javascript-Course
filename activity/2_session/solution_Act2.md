# Actividad Sesion 2
## Soluciones

Todas las soluciones han sido incluidas en el archivo `activity/2_session/index.html`.

### Ejercicio 1

Escribe un programa que tome como entrada un objeto y devuelva una lista con sus propiedades. Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.

```javascript
let person = {
  name: "Nibaldo",
  age: 34,
  profession: "Leader Actuarial DS"
}

Object.values(person);
```

### ejercicio 2

Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.

1. `This` referencia al objeto, que contiene el método donde se invoca.

```javascript	
let me = {
  name: "Nibaldo",
  edad: 34,
  speak: function () {
    console.log(this.name)
  }
};

me.speak();
```

2. `This` referencia al objeto al que se añade este método.

```javascript	
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
```

3. `This` referencia al objeto que contiene el método donde se invoca.

```javascript
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
```

4. Usando `call`, `apply` y `bind`.

```javascript	
// call, apply & bind
const talkme = function(lang1, lang2, lang3) {
  console.log(`Hola! Mi nombre es ${this.name} 
  y se programar en ${lang1}, ${lang2} y ${lang3}.`);
};

const nibaldo3 = {
  nombre: "Nibaldito3",
  edad: 34
};

const languages = ["JavaScript", "Python", "C"]
```

-  `call` hace referencia a `this` en su primer parametro.

```javascript	
talkme.call(nibaldo3, languages[0],languages[1],languages[2]);
```

- `apply` hace referencia a `this` en su primer parametro.

```javascript	
talkme.apply(nibaldo3, languages);
```

- `bind` devuelve una función en dónde `this` hace referencia al objeto que pasamos en su parámetro.

```javascript	
const TalkNibaldo = talkme.bind(nibaldo3, languages[0],languages[1],languages[2]);
TalkNibaldo();
```

5. `this` referencia al objeto que se instanciando.


```javascript	
// referencia al objeto que se instanciando
let Mascota = function(color, nombre, tipo) {
  this.color = color;
  this.name = nombre;
  this.type = tipo;
}

const Teo = new Mascota("Negro-Dorado", "Teo", "Perro");

console.log(Teo);
```


### Ejercicio 3

Clase ``InvertirCadena`` con un atributo ``cadenaInvertir`` vacio, un metodo arrow function que invierte el atributo inicial y si este está vacio, devuelve un mensaje de error.

```javascript
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
```

### Ejercicio 4

Crea una clase con el formato ES6. Esta clase va a tener dos atributos, username y password y un método ``login()`` que compruebe que username tiene el valor **admin** y password el valor **passwd** y en caso positivo, lance una alerta diciendo que el usuario esté logeado, en caso contrario, que diga que el usuario o la contraseña son incorrectas.

```javascript	
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
```


### Ejercicio 5

Crea dos clickListener, para los botones con id ``loginSuccess`` y ``loginFailure``. En el primero crearemos un objeto ``login`` que sea correcto y llamaremos a la función para que de el resultado correcto. En el segundo crearemos un objeto ``login`` con parámetros incorrectos y llamaremos a login para que falle.

```javascript
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
```


### Ejercicio 6

Crea dos clickListener, para los botones con id ``loginSuccessAsync`` y ``loginFailureAsync``. En el primero llamaremos a la función ``loginWitUsername`` para que de el resultado correcto. En el segundo llamaremos a la función con parámetros incorrectos.

```javascript
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          reject(new Error ("Error: invalid username or password"));
        }
      }, 1500);
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
```