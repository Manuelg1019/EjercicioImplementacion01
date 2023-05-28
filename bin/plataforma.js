export const allPlataformas = [];
export class plataforma {
    constructor(nombre, sitioWeb, planes, series) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = [];
        this.series = [];
        allPlataformas.push(this);
    }
    static mostrarPlataformas() {
        return allPlataformas;
    }
    darDetalle() {
        return `${this.nombre} (${this.sitioWeb}) tiene ${this.planes.length} y un catalogo de ${this.series.length} series `;
    }
    mostrarDetalles() {
        console.log(this.darDetalle());
    }
}
