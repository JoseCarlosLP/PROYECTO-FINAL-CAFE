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
        divReserva.innerText="";
        const content = document.createElement("p");
        content.innerHTML="<p> Nombre de Usuario: "+this.nombreUsuario+"</p><p> Productos a Reservar: </p><p>"+this.productos.aTexto()+"</p>";
        const ConfirmarButton=document.createElement("button");
        ConfirmarButton.innerText="Confirmar Reserva";
        content.appendChild(ConfirmarButton);
        divReserva.appendChild(content);
        ConfirmarButton.onclick=()=>{
            this.ConfirmarReserva();
        }
    }
    ConfirmarReserva(){
        
    }
}
export default Reserva;