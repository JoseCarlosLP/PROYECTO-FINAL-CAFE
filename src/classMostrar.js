import Reserva from "./Reserva";
class Mostrar{
    constructor(){
    };
    ListaProductos(listaProd){
        divMenu.innerText="";
        if(!listaProd.reserva)
        {
            listaProd.reserva=new Reserva("Usuario 1");
        }
        const ListaAMostrar=listaProd.Lista;
        ListaAMostrar.forEach((producto, index) => {
            
            if(producto.tieneStock())
            {
            const li=document.createElement("li");
            const botonReservar = document.createElement("button");
            botonReservar.innerText="Reservar";
            const content = document.createElement("p");
            content.innerHTML="<b> Nombre del Producto: </b> "+ producto.Nombre +"<br> <b>  Descripcion: </b> "+producto.Descripcion;
            if(producto.tienePrecio()) content.innerHTML+="<br> <b>  Precio: </b> "+producto.Precio;
            if(producto.tieneStock()) content.innerHTML+="<br> <b>  Stock: </b> "+producto.Stock;
            content.appendChild(botonReservar);
            li.appendChild(content);
            divMenu.appendChild(li);

            botonReservar.onclick=()=>{
                let producto=listaProd.Lista[index];
                listaProd.reserva.añadirProducto(producto);
                producto.decrementarStock(1);
                alert("Se reservó el producto escogido");
            }}
        });
    }
    Reservas(reserva)
    {
        divReserva.innerText="";
        const content = document.createElement("p");
        content.innerHTML="<p> Nombre de Usuario: "+reserva.NombreUsuario+"</p><p> Productos a Reservar: </p><p>"+reserva.productos.aTexto()+"</p>";
        const CancelarButton=document.createElement("button");
        CancelarButton.innerText="Cancelar Reserva";
        content.appendChild(CancelarButton);
        divReserva.appendChild(content);
        CancelarButton.onclick=()=>{ 
            this.CancelarReserva();
            alert("Se canceló la reserva");
            this.Reservas(reserva);
        }
    }
}
export default Mostrar;