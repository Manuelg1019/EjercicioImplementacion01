import { serie } from "./serie.js";

export class actor { 
    nombre : string;
    fotografia : string; 
    descripcion : string;
    seriesActuadas : serie[];

    constructor (nombre: string, fotografia : string, descripcion:string, seriesActuadas : serie[]){

        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.seriesActuadas = [];
    
    }
    darDetalle ():string {
        return `${this.nombre}: ${this.descripcion} ha actuado en ${this.seriesActuadas} series `

    }
    mostrarDetalle (): void{
        console.log(this)
    }
    agregarSerie(s: serie){
        this.seriesActuadas.push(s);
    }

}