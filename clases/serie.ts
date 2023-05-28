import { actor } from "./actor.js";
import { director } from "./director.js";
import { episodio } from "./episodio.js";
import { plataforma } from "./plataforma.js";

export const allSeries: serie [] = [];
export const todasCategorias: string [] = [];

export class serie {
    nombre: string;
    imagen : string;
    categorias : string[];
    episodios : episodio[];
    directores : director[];
    actores : actor[];
    plataformas : plataforma[];

    constructor (nombre:string, imagen:string, categorias: string[], episodios:episodio[], directores:director[], actores:actor[], plataformas:plataforma []){
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = []; 
        this.episodios = [];
        this.directores = [];
        this.actores = [];
        this.plataformas = [];
        allSeries.push(this);
    }
    
    static todasLasSeries() {
        return allSeries; 

    }
    darDetalle(): string {
        return `${this.nombre} [${this.imagen}] (${this.categorias.join(", ")})`;
    }
    mostrarDetalle():void {
        console.log(this.darDetalle());
    }
    mostrarCategorias ():void {
        console.log(this.categorias.join(", "));
    }
    mostrarDirectores ():void {
        console.log(this.directores);

        console.log(this.directores.map(d => d.nombre).join(", "));
    }
    mostrarActores ():void {
        console.log(this.actores);

        this.actores.forEach(a => console.log(a.darDetalle()))
        console.log(this.actores.map(d => d.nombre).join(", "));
    }
    agregarCategoria (c: string ): void {
        this.categorias.push(c);

    }
    agregarDirector (d: director ): void {
        this.directores.push(d);
        d.seriesDirigidas.push(this);
    }
    agregarActor (a: actor ): void {
        this.actores.push(a)
        a.agregarSerie(this);

        
    }
}

