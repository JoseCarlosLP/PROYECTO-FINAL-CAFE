import ListaProductos from "./ListaProductos";
class Reserva{
    constructor(nombreUsuario){
        this.NombreUsuario=nombreUsuario;
        this.productos=new ListaProductos();
    }
    getNombreUsuario(){
        return this.NombreUsuario;
    }
    añadirProducto(producto){
        this.productos.añadirProducto(producto);
    }
    getProductos(){
        return this.productos.Lista;
    }
    CancelarReserva(){
        this.getProductos().forEach(producto => {
        producto.incrementarCantidadDisponibleParaReservar(1);
    });

        this.productos=new ListaProductos;
    }
}
export default Reserva;