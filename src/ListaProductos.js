import Producto from "./Producto.js";

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
            else cadena += this.Lista[i].aTextoConPrecio();
            if (i<this.Lista.length - 1)
            {
                cadena+= "; ";
            }
        }
        return cadena;
    };

    mostrarMenuDisponible(lista)
    {
        for(let i=0;i<this.Lista.length;i++)
        {
            let producto=this.Lista[i];
            const li=document.createElement("li");
            li.innerHTML="<b> Nombre del Producto: </b> "+ producto.Nombre +"<br> <b>  Descripcion: </b> "+producto.Descripcion;
            lista.appendChild(li);
        }
        return lista;
    }
}

export default ListaProductos;