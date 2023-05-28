import { serie } from "./serie.js";


export class director {
    nombre : string;
    fotografia : string;
    descripcion : string;
    seriesDirigidas : serie [];

    constructor (nombre : string, fotografia : string, descripcion : string, seriesDirigidas : serie []){
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.seriesDirigidas = [];
    }
    darDetalle ():string {
        return `${this.nombre}: ${this.descripcion} ha dirigido ${this.seriesDirigidas} series `

    }
    mostrarDetalle (): void{
        console.log(this)
    }

}