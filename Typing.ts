const rectangulo = { altura: 10, anchura: 15 };
const area = rectangulo.altura * rectangulo.anchura;
console.log("Área" + area);


//console.log(4/[]);

function saludar(nombre){
    return "Hola, " + nombre;
}

console.log("Saludar: " + saludar("Calebin"));

let esVerdadero = true;
console.log("EsVerdadero: " + esVerdadero);

let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

let marca: string = "chevrolet";
let modelo: string = "sonic";

let nombre: string = "Caleb";
let apellido: string = "Nuñez";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;

let listaDeNumeros: number[] = [1, 12, 23];
//listaDeNumeros.push(true);  //<-- number expected

let listaDeNumeros2: Array<number> = [1, 12, 23];

let futbolista: [string, number];
futbolista = ['Kikin Fonseca', 56];
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

enum MarcasDeAutos {
    KIA,
    Chevrolet,
    Nissan
}

let march: MarcasDeAutos = MarcasDeAutos.Nissan;
console.log(march);


enum MarcasDeAutos2 {
    KIA = 100,
    Chevrolet,
    Nissan
}
let optima: MarcasDeAutos2 = MarcasDeAutos2.KIA;
console.log(optima);

console.log(MarcasDeAutos2[0]);

let variablesSinTipo: any = '¿cómo anda la mafia?';
console.log('Variable sin tipo: ' + variablesSinTipo);
variablesSinTipo = 101;
console.log('Variable sin tipo: ' + variablesSinTipo);

let valorDesconocido: unknown = 4;
console.log('Valor desconocido: ' + valorDesconocido);
valorDesconocido = true;
console.log('Valor desconocido: ' + valorDesconocido);

function saludar2(): void{
    console.log('Hola mundanos');
}

saludar2();


//Tipos null y undefined

let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

//Tipos never

// esta función no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// esta función no tiene un punto final ya que dispara un error
function fallo(): never { 
    return error('Reportar fallo');
}

// esta función no finaliza ya que posee n loop infinito
function loopInfinito(): never { 
    while(true){}
}

//Tipos Objects
declare function crear(o: object): void;
//crear({ prop: 0 });
// crear(null);
// crear(undefined);
// crear([]);

// false es un tipo primitivo, por lo cual se genera un error
// crear(false); //<-- doesn't work

//Tipos Unions
function imprimirId(id: number | string) {
    console.log(`El id es ${id}`);
}

imprimirId(1);
imprimirId('Hola');

function imprimirId2(id: number | string) {
    if(typeof id === "string"){
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }

}

imprimirId2('este_es_mi_id');
imprimirId2(10.6851981);

//Typos Type asertion
let algunValor: unknown = 'esto es un string';
let longitudDelString: number = (algunValor as string).length;

let algunValor2: unknown = 'este sería otro string';
let longitudDelString2: number = (<string>algunValor2).length;

//Tipos Functions
function saludar3(nombre: string){
    console.log(`Hola ${nombre}`);
}

saludar3('El profe romántico <3');

//Tipos de valor de retorno de la función
function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 5;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

//Funciones anónimas
const nombres = ["Juan", "Paco", "Pedro", "De la mar", "Su nombre es ♪"]
nombres.forEach(function(s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});

//Tipos Aliases
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto: Punto){
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada y es : ${punto.y}`);
}

imprimirCoordenada({ x: 50, y: 95});

//Tipos Interfaces
function imprimirEtiqueta(etiqueta: { label: string }) {
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta sería mi etiqueta"};
imprimirEtiqueta(miEtiqueta);


//// i n t e r f a c e
interface Etiqueta{
    label: string;
}

function imprimirEtiqueta2(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
};

let miEtiqueta2 = {numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta2(miEtiqueta2);

