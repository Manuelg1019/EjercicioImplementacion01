
import { plan } from "./plan.js";
import { serie } from "./serie.js"; 

export const allPlataformas: plataforma [] = [];

export class plataforma{
    nombre:string;
    sitioWeb:string;
    planes: plan[];
    series: serie[];

    constructor (nombre: string, sitioWeb: string, planes: plan [], series: serie[] ){
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = [];
        this.series = []; 
        allPlataformas.push(this);

    }
    static mostrarPlataformas () {
        return allPlataformas;         
    }

    darDetalle():string {
        return `${this.nombre} (${this.sitioWeb}) tiene ${this.planes.length} y un catalogo de ${this.series.length} series `;
    }
    mostrarDetalles (): void {
        console.log(this.darDetalle());
    }
}
