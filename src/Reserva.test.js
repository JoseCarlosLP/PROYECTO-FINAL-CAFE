import Reserva from "./Reserva"
import Producto from "./Producto";
describe("Reserva de Productos", ()=>{
    it("Debería crear una reserva solo con nombre de Usuario",()=>{
        let reserva=new Reserva("Usuario 1");
        expect(reserva.getNombreUsuario()).toEqual("Usuario 1");
    });
    it("Debería añadir un producto a la reserva",()=>{
        let reserva=new Reserva("Usuario 1");
        let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
        reserva.añadirProducto(prod1);
        expect(reserva.getProductos().length).toEqual(1);
    });
    it("Deberia añadir más de un producto a la reserva",()=>{
        let reserva=new Reserva("Usuario 1");
        let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
        let prod2= new Producto(2, "Galletas", "Galletas de vainilla con relleno de crema");
        reserva.añadirProducto(prod1);
        reserva.añadirProducto(prod2);
        expect(reserva.getProductos().length).toEqual(2);
    });
    it("Deberia eliminar los producto al cancelar la reserva",()=>{
        let reserva=new Reserva("Usuario 1");
        let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
        let prod2= new Producto(2, "Galletas", "Galletas de vainilla con relleno de crema");
        reserva.añadirProducto(prod1);
        reserva.añadirProducto(prod2);
        reserva.CancelarReserva();
        expect(reserva.getProductos().length).toEqual(0);
    });
});