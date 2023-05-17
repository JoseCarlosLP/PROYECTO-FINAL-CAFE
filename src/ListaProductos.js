import Producto from "./Producto.js";
import Reserva from "./Reserva.js";

class ListaProductos
{
    constructor()
    {
        this.Lista = [];
    };

    añadirProducto(producto)
    {
        this.Lista.push(producto);
    };

    eliminarProducto(id)
    {
        for(let i=0;i<this.Lista.length;i++)
        {
            if(this.Lista[i].Id==id)
            {
                this.Lista[i].eliminar();
                this.Lista.splice(i, 1);
                break;
            }
        }
    };

    aTexto()
    {
        let cadena = "";
        for(let i=0;i<this.Lista.length;i++)
        {
            if(this.Lista[i].Precio===undefined || this.Lista[i].Precio===0)
                cadena += this.Lista[i].aTexto();
            else if(this.Lista[i].Stock===undefined || this.Lista[i].Stock===0) cadena += this.Lista[i].aTextoConPrecio();
            else cadena += this.Lista[i].aTextoConStock();
            
            if (i<this.Lista.length - 1)
            {
                cadena+= "; ";
            }
        }
        return cadena;
    };

    
    mostrarMenuDisponible(lista)
    {
        let reserva=new Reserva("Usuario 1");
        const ListaAMostrar=this.Lista;
        ListaAMostrar.forEach((producto, index) => {
            const li=document.createElement("li");
            const botonReservar = document.createElement("button");
            botonReservar.innerText="Reservar";
            li.innerHTML="<b> Nombre del Producto: </b> "+ producto.Nombre +"<br> <b>  Descripcion: </b> "+producto.Descripcion;
            if(producto.tienePrecio()) li.innerHTML+="<br> <b>  Precio: </b> "+producto.Precio;
            if(producto.tieneStock()) li.innerHTML+="<br> <b>  Stock: </b> "+producto.Stock;
            lista.appendChild(li);
            lista.appendChild(botonReservar);
            
            botonReservar.onclick=()=>{
                reserva.añadirProducto(this.Lista[index]);
            }
            console.log(reserva);
        });
        return lista;
    }
    
}

export default ListaProductos;