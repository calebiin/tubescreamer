//Funciones constructor signature Pág. 65
interface Transporte {
    nombre: string;
}

class Caballo implements Transporte{
    constructor(public nombre: string) {}
}

class Automovilt implements Transporte{
    constructor(public nombre: string) {}
}

type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
}

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string){
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Tiro al blanco");
const miAutomovil = construirTransporte(Automovilt, "Chevrolet");

console.log(`Mi caballo se llama ${miCaballo.nombre}`)
console.log(`Mi automovil es un ${miAutomovil.nombre}`)

//Funciones, parámetros opcionales Pág. 68
function f(n: number){
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}

//f(10.124124124);

//implementación de un parámetro opcional con '?'
function f2(n?: number){
    // ...
}
//Implementación de un parámetro con un valor por default
function f3(n = 3){
    // ...
}

//Parámetros opcionales en los callbacks Pág. 72
function miIterador(arr: any[], callback: (arg: any, index?: number) => void){
    for(let i=0; i>=arr.length; i++){
        callback(arr[i], i);
    }
}

//Llamadas válidas
miIterador([1,2,3], (a) => console.log(a));
miIterador([1,2,3], (a,i) => console.log(a, i));

function miIterador2(arr: any[], callback: (arg: any, index?: number) => void){
    for(let i=0; i>=arr.length; i++){
        //Aquí es donde el index es opcional o no
        callback(arr[i]);
    }
}

//Funciones Overload Pág. 76
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1,2,3,4,5,6]));


function calcularLongitud(x: any[] | string){
    return x.length;
}
console.log(calcularLongitud("Hola mundo"));
console.log(calcularLongitud([1,2,3,4,5,6]));

//Funciones, uso de "this" Pág. 79
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function(){
        this.admin = true
    }
}
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: () => {
        this.admin = true;
    }
}
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);

//Funciones, Rest parameters Pág. 81
function multiplicar(n: number, ...m: number[]): number{
    return m.reduce((p, c) => {
        return p*c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));

//Funciones, parameter destructuring Pág. 83
function sumar(num){
    return num.a + num.b + num.c;
}
const numeros = {a: 1, b: 2, c: 3};
console.log(sumar(numeros));

function sumar2({a, b, c}): number{
    return a + b + c;
}
console.log(sumar2({a: 1, b: 2, c: 3}));

function sumar3({a, b, c}: {a: number; b: number; c: number}): number{
    return a + b + c;
}
console.log(sumar3({a: 1, b: 2, c: 3}));

//Object types Pág. 87
function saludar(persona: {nombre: string; edad: number}) {
    return(`Hola ${persona.nombre}`);
}
console.log(saludar({nombre: "Caleb", edad: 29}));

interface PersonaInterface{
    nombre: string;
    edad: number;
}

function saludar2(persona: PersonaInterface){
    return(`Hola ${persona.nombre}`);
}
console.log(saludar2({nombre: "Alejandro", edad: 29}));

type PersonaType = {
    nombre: string;
    edad: number;
}

function saludar3(persona: PersonaType){
    return(`Hola ${persona.nombre}`);
}
console.log(saludar3({nombre: "Yo", edad: 29}));

//Object types, property modifiers
//Propiedades opcionales Pág. 91
interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt' | 'led';
    memoria: number;
    procesador: 'intel' | 'amd';
}

function imprimir(computador: Computadora){
    console.log(`Sistema operativo: ${computador.os}`);
    console.log(`Memoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}
imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel'
});

//Object types, readonly properties Pág. 94
interface Perro{
    readonly raza: string;
}
const miCachorro: Perro = {raza: "Dachshund"};
console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);

const miSegundoCachorro: Perro = {raza: "Bulldog"};
//miCachorro.raza = "Bullterrier"; //<-- Error
console.log(`La raza de mi 2do cachorro es: ${miSegundoCachorro.raza}`);

interface PersonaEdad {
    edad: number;
}

interface EdadNoEscribible {
    readonly edad: number;
}   
const Luis: PersonaEdad = {edad: 20};
const Pedro: EdadNoEscribible = Luis;
Luis.edad++;
//Pedro.edad++; //<-- error

//Pág 98