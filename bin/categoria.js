export class categoria {
    constructor(n) {
        this.nombre = n;
    }
    static agregarCategoria(c) {
        categoria.categorias.push(c);
    }
}
