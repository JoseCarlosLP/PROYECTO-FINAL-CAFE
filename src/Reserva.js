class Reserva{
    constructor(nombreUsuario){
        this.nombreUsuario=nombreUsuario;
    }
    getNombreUsuario(){
        return this.nombreUsuario;
    }
    añadirProducto(producto){
        this.producto=producto;
    }
    getProducto(){
        return this.producto;
    }
}
export default Reserva;