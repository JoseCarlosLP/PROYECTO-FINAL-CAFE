import ListaProductos from "./ListaProductos";
class Reserva{
    constructor(nombreUsuario){
        this.nombreUsuario=nombreUsuario;
        this.productos=new ListaProductos();
    }
    getNombreUsuario(){
        return this.nombreUsuario;
    }
    añadirProducto(producto){
        this.productos.añadirProducto(producto);
    }
    getProductos(){
        return this.productos.Lista;
    }
}
export default Reserva;