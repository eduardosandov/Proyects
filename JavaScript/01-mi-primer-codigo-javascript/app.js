//Declaracion de variables
/*var name = "Eduardo";
var lastname = "SAndoval Garcia";
console.log(name + " " + lastname);
console.log(`${name} ${lastname}`)*/

//Variables de tipo String, Number, Float, Boolean, Array, Object, Fuction

/*var name = "Eduardo Sandoval";
name = 55;
name = 109.7;
name = {};
console.log(name);
console.log("La variable name es de tipo: " + typeof name);*/

//DECLARACION DE VARIABLES
/*var name = "Eduardo";
let lastname = "Sandoval";*/

/*function miFunction() {
    var marcaCoche = "BMW";
    let size = 1000;
    if (marcaCoche = "BMW"){
        var precio = 90.0;
        let size = 1000;
    }
    console.log(size);
    console.log(precio);
    console.log(marcaCoche);
}

miFunction();*/

//DECLARACION CON CONST

/*const urlApi = "http://google.es/api";
console.log(urlApi);
urlApi = "https://eduardosandoval.com/" esto da error porque una const nunca cambia
console.log(urlApi);*/

/*const URL_API = "https://google.mx";
const VERSION_API ="v1";
var LANG = "es";
const API ="ajsdjfdfjbfdffgfgcswwwg";

function getSongs(){
    const url = `${URL_API}/${VERSION_API}/${LANG}/get-songs`;
    console.log(url);
}

getSongs();*/

//ASIGNACION sin DESTRUCTURING
/*var objeto = {
    name: "Eduardo",
    apellidos: "Sandoval",
    edad: 28,
    pais: "Mexico"
}

var name = objeto.name;
var apellidos = objeto.apellidos;
var edad = objeto.edad;
var pais = objeto.pais;

console.log(name);
console.log(apellidos);
console.log(edad);
console.log(pais);*/

//----ASIGNACION POR DESTRUCTURING----
/*var objeto = {
    name: "Eduardo",
    apellidos: "Sandoval",
    edad: 28,
    pais: "Mexico"
}

//var name = objeto.name;
//var apellidos = objeto.apellidos;
//var edad = objeto.edad;
//var pais = objeto.pais;

const {name, apellidos, ...rest } = objeto;

console.log(name);
console.log(apellidos);
console.log(rest);
*/

//DECLARACION DE OBJETO
/*let ventilador = {
    altura: "100 cm",
    color: "Negro",
    potencia: "100W"
};

console.log(ventilador);*/

//NOTACION POR PUNTOS 

/*let ventilador = {
    altura: "100 cm",
    color: "Negro",
    potencia: "100W"
};

console.log(ventilador);
console.log("El ventilador mide: " + ventilador.altura);
console.log(ventilador.altura);
*/

//Y POR CORCHETES

/*let ventilador = {
    altura: "100 cm",
    color: "Negro",
    potencia: "100W"
};

var opcionDelUsuario = "altura";
console.log(ventilador);
console.log(ventilador[opcionDelUsuario]);*/

//OBJETOS DENTRO DE OBJETOS

/*let ventilador = {
    altura: "100 cm",
    color: "Negro",
    potencia: "100W",
    helices:{
        tamano: "10cm",
        material: "plastico",
        color: "Blanco",
        precio:{
            precio1: 20,
            precio2: 40,
            casa: {
                casa1: "La mía",
                casa2: "La tuya"
            }
        }
    }
};

console.log(ventilador);
//como acceder a casa
console.log(ventilador.helices.precio.casa.casa2);

*/


//MODIFICACION DE OBJETOS Y CREACION DE NUEVAS PROPIEDADES
/*
let ventilador = {
    altura: "100 cm",
    color: "Negro",
    potencia: "100W"
};
console.log(ventilador);
/*cambiamos el valor de color*/
/*ventilador.color = "Blanco";*/

/*asignamos la propiedad precio*/
/*
ventilador.precio = 59;

console.log(ventilador);
*/