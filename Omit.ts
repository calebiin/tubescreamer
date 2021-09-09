interface Persona{
    edad: number;
    nombre?: string;
    tipoSanguineo: string;
}
interface PersonaBionicaOmit extends Omit<Persona, "edad" | "tipoSanguineo">{
    tienePartesBionicas: boolean;
}



interface EdadNoEscribible{
    readonly edad: number;
}

const luis: Persona = {edad: 20, tipoSanguineo: "O+"};
const pedro: EdadNoEscribible = {edad: luis.edad};
const jarvis: PersonaBionicaOmit = { nombre: "jarvis", tienePartesBionicas: true };
luis.edad ++;

console.log(luis);
console.log(pedro);
console.log(jarvis);
