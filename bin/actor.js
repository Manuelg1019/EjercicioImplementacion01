export class actor {
    constructor(nombre, fotografia, descripcion, seriesActuadas) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.seriesActuadas = [];
    }
    darDetalle() {
        return `${this.nombre}: ${this.descripcion} ha actuado en ${this.seriesActuadas} series `;
    }
    mostrarDetalle() {
        console.log(this);
    }
    agregarSerie(s) {
        this.seriesActuadas.push(s);
    }
}
