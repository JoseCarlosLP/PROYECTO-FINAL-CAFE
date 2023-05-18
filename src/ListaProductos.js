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
            cadena += this.Lista[i].aTextoConStock();
            if (i<this.Lista.length - 1)
            {
                cadena+= "; ";
            }
        }
        return cadena;
    };
}

export default ListaProductos;