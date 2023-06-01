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
        producto.CantidadReservada=producto.CantidadReservada+1;
    };

    eliminarRepetidos() {
        let newArray = [];
        this.Lista.forEach(producto => {
          const claveUnica = producto.Nombre;
          const index = newArray.findIndex(item => item.Nombre === claveUnica);
          if (index === -1) {
            newArray.push(producto);
          }
        });
        return newArray;
      }

    eliminarProducto(id)
    {
        for(let i=0;i<this.Lista.length;i++)
        {
            if(this.Lista[i].Id==id)
            {
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
            cadena += this.Lista[i].aTextoConStock();
            if (i<this.Lista.length - 1)
            {
                cadena+= "; ";
            }
        }
        return cadena;
    };

    aTextoConCantidadReservada()
    {
        let cadena = "";
        let Productos=this.eliminarRepetidos();
        for(let i=0;i<Productos.length;i++)
        {
            cadena += Productos[i].aTextoConStock();
            if(Productos[i].CantidadReservada>0)
                cadena+=", Cantidad Reservada: "+Productos[i].CantidadReservada + " ";
            if (i<Productos[i] - 1)
            {
                cadena+= "; ";
            }
        }
        return cadena;
    };

    aTextoBonito()
    {
        let cadena = "";
        let Productos=this.eliminarRepetidos();
        for(let i=0;i<Productos.length;i++)
        {
            cadena += Productos[i].aTextoBonito();
            if(Productos[i].CantidadReservada>0)
                cadena+="Cantidad Reservada: "+Productos[i].CantidadReservada + "*|";
        }
        return cadena;
    }
}

export default ListaProductos;