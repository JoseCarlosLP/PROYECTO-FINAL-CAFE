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
            divReserva.innerText="Sin Productos Reservados";
            const content = document.createElement("p");
            content.innerHTML="<p> Nombre de Usuario: "+this.nombreUsuario+"</p><p> Productos a Reservar: </p><p>"+this.productos.aTexto()+"</p>";
            const CancelarButton=document.createElement("button");
            CancelarButton.innerText="Cancelar Reserva";
            content.appendChild(CancelarButton);
            divReserva.appendChild(content);
            CancelarButton.onclick=()=>{ 
                this.CancelarReserva();
                alert("Se canceló la reserva");
                this.mostrar();
            }
    }
    CancelarReserva(){
        this.getProductos().forEach(producto => {
        producto.incrementarStock(1);
    });

        this.productos=new ListaProductos;
    }
}
export default Reserva;