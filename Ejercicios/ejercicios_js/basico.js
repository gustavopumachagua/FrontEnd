/*********************************************************usa UpperCamelCase en:***************************************************************/
////////////////////////////////clases
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}
/****************************************************************usa LowerCamelCase en:********************************************************/
////////////////////////////////objetos
const unObjeto = {
  nombre: "gustavo",
  email: "gustavo@gmail.com",
};
//////////////////////////////primitivos
let unaCadena = "hola Mundo",
  unNumero = 19,
  unBoolean = true;
///////////////////////////////funciones
function holaMundo(nombre) {
  alert(`Hola Mundo ${nombre}`);
}
holaMundo("gustavo");
/////////////////////////////////instancias
const ajax = new XMLHttpRequest();
jon = new SerHumano("gustavo", "Hombre");
/***************************************************************Variables y Constantes*********************************************************/
/////////////////////////Variables de bloque
let x = "Hola Puki";
if (true) {
  let x = "Hola Gustavo";
  console.log(x); //imprime en consola Hola Gustavo
}
console.log(x); //imprime en consola hola Puki
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < 5; i++) {
  console.log(i); //imprime del 0 al 4
}
console.log(i); //imprime Uncaught ReferenceError
/*********************************************************************Constantes***************************************************************/
const DIEZ = 10;
DIEZ = 5;
console.log(DIEZ); // Imprime Uncaught TypeError: Assignment to constant variable
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const hola = "hola mundo";
hola = "hola mundo"; // Imprime Uncaught TypeError: Assignment to constant variable
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const obj = {};
obj.prop = "x";
console.log(obj); //imprime {prop:"x"}
obj.prop = "y";
console.log(obj); //imprime {prop:"y"}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const D = document;
console.log(D); //imprime el objeto document
console.log(D.documentElement); //imprime el elemento <htm></htm>
/*****************************************************************************Nivel de Bloques*************************************************/
/////////////////////////////sin bloques
function f() {
  return 1;
}
console.log(f()); //imprime 2
function f() {
  return 2;
}
console.log(f()); //imprime 2
console.log(f()); //imprime 2
//////////////////////////con bloques
function f1() {
  return 1;
}
{
  console.log(f1()); //imprime 2
  function f1() {
    return 2;
  }
  console.log(f1()); //imprime 2
}
console.log(f1()); //imprime 2
/************************************************************************Plantillas de Cadenas*************************************************/
let saludo = `Hola soy un template string`;
console.log(saludo); //imprime hola soy un template string
/////////////////////////string multilinea
let mensaje = `No es quien seas en el interior, tus actos son los que te definen....
Batman`;
console.log(mensaje);
/*
Imprime
No es quien seas en el interior,
tus actos son los que te definen...
Batman
*/
/////////////////////variables en string (interpolacion)
let nombre = "gustavo";
console.log(`Hola ${nombre}`); //imprime hola gustavo
///////////////////////////////ejecutar expresiones
console.log(`Hola ${nombre}, tienes ${30 + 2} años`); //imprime hola gustavo, tienes 32 años
/////////////////////////////////ejecutar funciones
let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  ol = `<ol>
${estaciones
  .map(function (estacion) {
    return `<li>${estacion}</li>`;
  })
  .join("")}
</ol>`;
console.log(ol); ////Imprime <ol><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ol>
///////////////////////////funcion de etiquetado
const etiqueta = function (cadena, variable) {
  console.log(cadena); //imprime ["hola","", raw:Array[2]]
  console.log(variable); //imprime ulises
  console.log(cadena[0] + variable); //imprime hola ulises
};
let otroNombre = "ulises";
etiqueta`hola ${otroNombre}`;
/***************************************************************funciones flechas**************************************************************/
//////////////////////////antes
var saludo1 = function (nombre) {
  return "Hola " + nombre;
};
console.log(saludo1("gustavo")); //imprime hola gustavo
///////////////////////////ahora
let saludo2 = (nombre) => `Hola ${nombre}`;
console.log(saludo2("gustavo")); //imprime hola gustavo
/********************************************************************funcion de varios parametros**********************************************/
///////////////////////////Antes
var sumar = function (a, b) {
  return a + b;
};
console.log(sumar(10, 9)); //imprime 19
///////////////////////////Ahora
let sumar = (a, b) => a + b;
console.log(sumar(10, 9)); //imprime 19
/*************************************************************************funcion sin parametros***********************************************/
///////////////////////////Antes
var saludo3 = function () {
  return "Hola a tod@s";
};
console.log(saludo3()); //imprime Hola a tod@s
///////////////////////////Ahora
let saludo4 = () => `Hola a tod@s`;
console.log(saludo4()); //imprime Hola a tod@s
/*******************************************************************************funcion con cuerpo*********************************************/
///////////////////////////Antes
var fecha = new Date();
hora = fecha.getHours();
var saludo5 = function (hr) {
  if (hr <= 5) {
    return "No me jodas!!!";
  } else if (hr >= 6 && hr <= 11) {
    return "Buenos dias!!!";
  } else if (hr >= 12 && hr <= 18) {
    return "Buenas tardes!!!";
  } else {
    return "Buenas noches";
  }
};
console.log(saludo5(hora)); //imprime el saludo dependiendo la hora del dia
///////////////////////////Ahora
let fecha = new Date();
hora = fecha.getHours();
let saludo6 = (hr) => {
  if (hr <= 5) {
    return "No me jodas!!!";
  } else if (hr >= 6 && hr <= 11) {
    return "Buenos dias!!!";
  } else if (hr >= 12 && hr <= 18) {
    return "Buenas tardes!!!";
  } else {
    return "Buenas noches!!!";
  }
};
console.log(saludo6(hora)); //imprime el saludo dependiendo la hora del dia
/////////////////////////////Antes
var numeros = [1, 2, 3, 4];
numeros.forEach(function (num) {
  console.log(num); //imprime el numero en turno
  console.log(num * 10); //imprime el numero en turno por 10
});
//////////////////////////////Ahora
let numeros = [1, 2, 3, 4];
numeros.forEach((num) => {
  console.log(num); //imprime el numero en turno
  console.log(num * 10); //imprime el numero en turno por 10
});
/***************************************************************contexto lexico de this********************************************************/
///////////////////////////El problema de `this` Antes
function Persona(nombre) {
  //El constructor Persona() define `this` como una instancia de el mismo
  this.nombre = nombre;
  this.edad = 0;
  setInterval(function () {
    //La funcion anonima define `this` como una instancia de ella misma
    this.edad++;
  }, 1000);
}
var jon = new Persona("jonathan");
console.log(jon); //Imprime la edad en 0 por cada segundo que pasa
/////////////////////La solucion al problema de `this` Antes
function Persona(nombre) {
  //se declara una variable self (algunos prefieren that) para guardar el `this` del constructor Persona()
  var self = this;
  self.nombre = nombre;
  self.edad = 0;
  setInterval(function () {
    //La funcion anonima define su propio `this` pero el valor que aumenta es edad del `this` del constructor Persona()
    self.edad++;
  }, 1000);
}
var jon = new Persona("gustavo");
console.log(jon); //Imprime el valor de edad mas uno por cada segundo que pasa
//////////////////////////La solucion al problema de `this` Ahora
function Persona(nombre) {
  //El constructor Persona() define `this` como una instancia de el mismo
  this.nombre = nombre;
  this.edad = 0;
  setInterval(() => {
    //`this` hace referencia al objeto Persona()
    this.edad++;
  }, 1000);
}
const jon = new Persona("gustavo");
console.log(jon); //Imprime el valor de edad mas uno por cada segundo que pasa
console.log(jon.edad); //imprime la edad
/***********************************************************************Objetos Literales******************************************************/
////////////////////////Antes
var nombre7 = "puky",
  edad = 4;
var perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    alert("gua gua!!!");
  },
};
console.log(perro); //Imprime Object {nombre:"puky", edad: 4}
perro.ladrar(); //Manda alerta
/////////////////////////Ahora
let nombre80 = "PUKY",
  edad = 4;
const perro = {
  nombre,
  edad,
  ladrar() {
    alert("guau guau!!!");
  },
};
console.log(perro); //Imprime Object {nombre: "PUKY", edad: 4}
perro.ladrar(); //Manda alerta
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let nombreAtributo = "nombre",
  nombreOtroAtributo = "edad",
  nombreMetodo = "ladrar";
const perro = {
  [nombreAtributo]: "PUKY",
  [`${nombreOtroAtributo}`]: 4,
  [nombreMetodo]() {
    alert("guau guau!!!");
  },
};
console.log(perro); //Imprime Object {nombre: "PUKY", edad: 4}
perro.ladrar(); //Manda alerta
/************************Destructuracion**********************/
//destructuracion de arreglos
let numeros = [1, 2, 3];
//sin destructuracion
let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];
console.log(numeros, uno, dos, tres); //Imprime [1, 2, 3] 1 2 3
//con destructuracion
let [one, two, three] = numeros;
console.log(numeros, one, two, three); //Imprime [1, 2, 3] 1 2 3
//Destructuracion de objetos
let persona = { nombres: "gustavo", apellido: "Mircha" };
let { nombres, apellido } = persona;
console.log(persona); //Imprime Object {nombres: "gustavo", apellido: "MirCha"}
console.log(nombre); //Imprime gustavo
console.log(apellido); //Imprime Mircha
let datos = { correo: "gustavo@gmail.com", telefono: 52369855 };
let { correo: email, telefono: phone } = datos;
console.log(datos); //Imprime Object { correo: 'gustavo@gmail.com', telefono: 52369855 }
console.log(email); //Imprime gustavo@gmail.com
console.log(phone); //Imprime 52369855
/*****************Parametros por defecto********************/
//antes
function pais(nombre) {
  nombre = nombre || "Terrestre";
  console.log(nombre);
}
pais(); //Imprime Terrestre
pais("Mexico"); //Imprime Mexico
//Ahora
function pais(nombre = "Terrestre") {
  console.log(nombre);
}
pais(); //Imprime Terrestre
pais("Mexico"); //Imprime Mexico
/*************************Parametros Rest*******/
function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach((n) => {
    resultado += n;
  });
  return console.log(resultado);
}
sumar(1, 2); //Imprime 3
sumar(1, 2, 3); //Imprime 6
sumar(1, 2, 3, 4); //Imprime 10
sumar(1, 2, 3, 4, 5); //Imprime 15
/**************************Operador de propagacion************/
let arr1 = [1, 2, 3, 4];
arr2 = [5, 6, 7, 8];
console.log(arr1); //Imprime [1,2,3,4]
console.log(...arr1); //Imprime 1 2 3 4

arr1.push(...arr2);
console.log(arr1); //Imprime [1,2,3,4,5,6,7,8]

let superiores = ["hombros", "brazos", "tronco"];
inferiores = ["pelvis", "piernas", "rodillas"];
cuerpo = ["cabeza", ...superiores, ...inferiores, "pies"];
console.log(cuerpo); //Imprime ["cabeza", "hombros", "brazos", "tronco", "pelvis", "piernas", "rodillas", "pies"]
console.log(...cuerpo); //Imprime cabeza hombros brazos tronco pelvis piernas rodillas pies
/***********************Clases**************************/
class Animal {
  //el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  //metodos publicos de la clase
  comunicar() {
    console.log("Me comunico con sonidos");
  }
  comer() {
    console.log("Ingiero alimentos");
  }
  respirar() {
    console.log("Respiro oxigeno");
  }
  reproducir() {
    console.log("Me reproduzco sexualmente");
  }
}
let lucy = new Animal("lucy", 20, " Hembra");
console.log(lucy); //Imprime Animal {nombre: "Lucy", edad: 20, genero: "Hembra"}
lucy.comunicar(); //Imprime Me comunico con sonidos
lucy.comer(); //Imprime Ingiero alimentos
lucy.respirar(); //Imprime Respiro oxígeno
lucy.reproducir(); //Imprime Me reproduzco sexualmente
////////////////Herencia, polimorfismo, metodos estaticos, setters y getters
//con la palabra extends la clase humano hereda de animal
class Humano extends Animal {
  //el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, edad, genero) {
    //con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, edad, genero);
    this.razonar = true;
    this._nacionalidad = "Terrestre";
  }
  //un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
  static saludar() {
    console.log("Hola soy un Humano");
  }
  //Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  set nacionalidad(pais) {
    this._nacionalidad = pais;
  }
  get nacionalidad() {
    return this._nacionalidad;
  }
  //metodos publicos de la clase redefinidos gracias al polimorfismo
  comunicar() {
    console.log("Me comunico hablando");
  }
  comer() {
    console.log("Como de todo, soy omnivoro");
  }
  respirar() {
    console.log("Respiro oxigeno con ayuda de mis pulmones");
  }
  reproducir() {
    console.log("Me reproduzco sexualmente, soy mamifero y viviparo");
  }
  pensar() {
    console.log("pienso por que tengo intelecto");
  }
}
Humano.saludar(); //Imprime Hola soy un Humano
let jon = new Humano("jonathan", 32, "Macho");
console.log(jon); //Imprime Humano {nombre: "Jonathan", edad: 32, genero: "Macho", razonar: true, _nacionalidad: "Terrestre"}
jon.comunicar(); //Imprime Me comunico hablando
jon.comer(); //Imprime Como de todo, soy omnívoro
jon.respirar(); //Imprime Respiro oxígeno con ayuda de mis pulmones
jon.reproducir(); //Imprime Me reproduzco sexualmente, soy mamífero y vivíparo
jon.pensar(); //Imprime Pienso por que tengo intelecto
jon.nacionalidad = "Mexico";
console.log(jon.nacionalidad); //Imprime México
console.log(jon); //Imprime Humano {nombre: "Jonathan", edad: 32, genero: "Macho", razonar: true, _nacionalidad: "México"}
