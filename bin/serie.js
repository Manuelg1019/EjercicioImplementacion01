export const allSeries = [];
export const todasCategorias = [];
export class serie {
    constructor(nombre, imagen, categorias, episodios, directores, actores, plataformas) {
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
    darDetalle() {
        return `${this.nombre} [${this.imagen}] (${this.categorias.join(", ")})`;
    }
    mostrarDetalle() {
        console.log(this.darDetalle());
    }
    mostrarCategorias() {
        console.log(this.categorias.join(", "));
    }
    mostrarDirectores() {
        console.log(this.directores);
        console.log(this.directores.map(d => d.nombre).join(", "));
    }
    mostrarActores() {
        console.log(this.actores);
        this.actores.forEach(a => console.log(a.darDetalle()));
        console.log(this.actores.map(d => d.nombre).join(", "));
    }
    agregarCategoria(c) {
        this.categorias.push(c);
    }
    agregarDirector(d) {
        this.directores.push(d);
        d.seriesDirigidas.push(this);
    }
    agregarActor(a) {
        this.actores.push(a);
        a.agregarSerie(this);
    }
}
