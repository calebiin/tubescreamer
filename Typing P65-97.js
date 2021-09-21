var _this = this;
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovilt = /** @class */ (function () {
    function Automovilt(nombre) {
        this.nombre = nombre;
    }
    return Automovilt;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Tiro al blanco");
var miAutomovil = construirTransporte(Automovilt, "Chevrolet");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);
//Funciones, parámetros opcionales Pág. 68
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
//f(10.124124124);
//implementación de un parámetro opcional con '?'
function f2(n) {
    // ...
}
//Implementación de un parámetro con un valor por default
function f3(n) {
    if (n === void 0) { n = 3; }
    // ...
}
//Parámetros opcionales en los callbacks Pág. 72
function miIterador(arr, callback) {
    for (var i = 0; i >= arr.length; i++) {
        callback(arr[i], i);
    }
}
//Llamadas válidas
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
function miIterador2(arr, callback) {
    for (var i = 0; i >= arr.length; i++) {
        //Aquí es donde el index es opcional o no
        callback(arr[i]);
    }
}
function longitud(x) {
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5, 6]));
function calcularLongitud(x) {
    return x.length;
}
console.log(calcularLongitud("Hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5, 6]));
//Funciones, uso de "this" Pág. 79
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
//Funciones, Rest parameters Pág. 81
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
//Funciones, parameter destructuring Pág. 83
function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3({ a: 1, b: 2, c: 3 }));
//Object types Pág. 87
function saludar(persona) {
    return ("Hola " + persona.nombre);
}
console.log(saludar({ nombre: "Caleb", edad: 29 }));
function saludar2(persona) {
    return ("Hola " + persona.nombre);
}
console.log(saludar2({ nombre: "Alejandro", edad: 29 }));
function saludar3(persona) {
    return ("Hola " + persona.nombre);
}
console.log(saludar3({ nombre: "Yo", edad: 29 }));
function imprimir(computador) {
    console.log("Sistema operativo: " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel'
});
var miCachorro = { raza: "Dachshund" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var miSegundoCachorro = { raza: "Bulldog" };
//miCachorro.raza = "Bullterrier"; //<-- Error
console.log("La raza de mi 2do cachorro es: " + miSegundoCachorro.raza);
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
//Pedro.edad++; //<-- error
//Pág 98
