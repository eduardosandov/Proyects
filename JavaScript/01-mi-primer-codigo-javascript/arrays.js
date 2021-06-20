var permitido = "usuario permitido"
var miFuncion = acceso => acceso

var miArray = ["Ciapfa",2021,34.9,true, ["otro array",232], miFuncion(permitido)]

console.log(miArray[5])

var permitido = "usuario permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre : "eduardo",
    miAutomovil : [
        pintura = {
            marca : "Marca",
            precio : 2000,
            color : "verde"
        },
        vendedor = {
            nombre : "juan",
            edad : 2,
            ayudante : {
                nombre : "julio"
            }
        }
    ]
}

var miArray = ["Ciapfa",2021,34.9,true, ["otro array",232], miFuncion(permitido), persona]

console.log(miArray[6].miAutomovil[1].ayudante.nombre)