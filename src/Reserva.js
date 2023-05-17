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
    mostrar()
    {
        let texto="<p> Nombre de Usuario: "+this.nombreUsuario+"</p><p> Productos a Reservar: </p>"+this.productos.aTexto();
        return texto;
    }
}
export default Reserva;