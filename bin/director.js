export class director {
    constructor(nombre, fotografia, descripcion, seriesDirigidas) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.seriesDirigidas = [];
    }
    darDetalle() {
        return `${this.nombre}: ${this.descripcion} ha dirigido ${this.seriesDirigidas} series `;
    }
    mostrarDetalle() {
        console.log(this);
    }
}
