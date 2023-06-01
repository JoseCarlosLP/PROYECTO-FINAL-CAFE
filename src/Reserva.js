import ListaProductos from "./ListaProductos";
class Reserva{
    constructor(nombreUsuario){
        this.NombreUsuario=nombreUsuario;
        this.productos=new ListaProductos();
        this.estadoReserva="Pendiente";
    }
    getNombreUsuario(){
        return this.NombreUsuario;
    }
    añadirProducto(producto){
        this.productos.añadirProducto(producto);
    }
    establecerEstadoReservaEntregada(){
        this.estadoReserva="Entregada";
    }
    getProductos(){
        return this.productos.Lista;
    }
    CancelarReserva(){
        this.getProductos().forEach(producto => {
        producto.incrementarCantidadDisponibleParaReservar(1);
        producto.decrementarCantidadReservada(1);
        });
        this.productos=new ListaProductos;
    }
    confirmarEntrega(){
        this.getProductos().forEach(producto => {
            producto.decrementarStock(1);
        });   
        this.establecerEstadoReservaEntregada();
    }
}
export default Reserva;