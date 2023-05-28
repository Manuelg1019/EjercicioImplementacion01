export class categoria {
  
    static categorias: categoria[];

    nombre: string;

    constructor (n: string){
        this.nombre = n;
    }
    static agregarCategoria(c: categoria){
        categoria.categorias.push(c);
    }

}
