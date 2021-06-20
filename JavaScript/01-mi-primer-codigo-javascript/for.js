for( i=1; i <= 2; i++){
    if(i==1){
        console.log("Hola"+ i +"vez")
    }
    console.log("Hola" + i + "Veces")
}

var miArray = ["Hola",2021,"Adios"]

var persona1 = {
    nombre : "Eduardo",
    edad : 2
}
var persona2 = {
    nombre : "Juan",
    edad : 24
}
var persona3 = {
    nombre : "Du",
    edad : 27
}
var personas = [persona1,persona2,persona3]

for (let index = 0; index < miArray.length; index++) {
    if(personas[index].edad >= 20){
        break;
    }
    const element = personas[index].nombre;
    console.log(element)    
}

personas.forEach(element => console.log(element.edad))

miArray.forEach(element => console.log(element))

miArray.forEach((element,i) => {
    console.log(i)
} )

