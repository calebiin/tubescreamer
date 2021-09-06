var rectangulo = { altura: 10, anchura: 15 };
var area = rectangulo.altura * rectangulo.anchura;
console.log("Área" + area);
//console.log(4/[]);
function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log("Saludar: " + saludar("Calebin"));
var esVerdadero = true;
console.log("EsVerdadero: " + esVerdadero);
var entero = 6;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
var marca = "chevrolet";
var modelo = "sonic";
var nombre = "Caleb";
var apellido = "Nuñez";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
var listaDeNumeros = [1, 12, 23];
//listaDeNumeros.push(true);  //<-- number expected
var listaDeNumeros2 = [1, 12, 23];
var futbolista;
futbolista = ['Kikin Fonseca', 56];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["KIA"] = 0] = "KIA";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Nissan"] = 2] = "Nissan";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var march = MarcasDeAutos.Nissan;
console.log(march);
var MarcasDeAutos2;
(function (MarcasDeAutos2) {
    MarcasDeAutos2[MarcasDeAutos2["KIA"] = 100] = "KIA";
    MarcasDeAutos2[MarcasDeAutos2["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos2[MarcasDeAutos2["Nissan"] = 102] = "Nissan";
})(MarcasDeAutos2 || (MarcasDeAutos2 = {}));
var optima = MarcasDeAutos2.KIA;
console.log(optima);
console.log(MarcasDeAutos2[0]);
var variablesSinTipo = '¿cómo anda la mafia?';
console.log('Variable sin tipo: ' + variablesSinTipo);
variablesSinTipo = 101;
console.log('Variable sin tipo: ' + variablesSinTipo);
var valorDesconocido = 4;
console.log('Valor desconocido: ' + valorDesconocido);
valorDesconocido = true;
console.log('Valor desconocido: ' + valorDesconocido);
function saludar2() {
    console.log('Hola mundanos');
}
saludar2();
//Tipos null y undefined
var variableSinDefinir = undefined;
var variableNula = null;
//Tipos never
// esta función no tiene un punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
// esta función no tiene un punto final ya que dispara un error
function fallo() {
    return error('Reportar fallo');
}
// esta función no finaliza ya que posee n loop infinito
function loopInfinito() {
    while (true) { }
}
//crear({ prop: 0 });
// crear(null);
// crear(undefined);
// crear([]);
// false es un tipo primitivo, por lo cual se genera un error
// crear(false); //<-- doesn't work
//Tipos Unions
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId('Hola');
function imprimirId2(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirId2('este_es_mi_id');
imprimirId2(10.6851981);
//Typos Type asertion
var algunValor = 'esto es un string';
var longitudDelString = algunValor.length;
var algunValor2 = 'este sería otro string';
var longitudDelString2 = algunValor2.length;
//Tipos Functions
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3('El profe romántico <3');
//Tipos de valor de retorno de la función
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 5;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//Funciones anónimas
var nombres = ["Juan", "Paco", "Pedro", "De la mar", "Su nombre es ♪"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada y es : " + punto.y);
}
imprimirCoordenada({ x: 50, y: 95 });
//Tipos Interfaces
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta sería mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
;
var miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta2(miEtiqueta2);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = {
    x: 10,
    y: 20
};
punto1.x = 25;
//Tipos Literales
function imprimirLiteral(estadoCivil) {
    console.log(estadoCivil);
}
imprimirLiteral('soltero');
//Funciones como expresiones
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar(imprimirEnConsola);
