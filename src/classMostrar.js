import Reserva from "./Reserva";
const prodRef = document.getElementById("productos-ref");
const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const stock = document.querySelector("#stock");
const categoria = document.querySelector("#categoria");

class Mostrar{
    constructor(){
    };
    ListaProductos(listaProd,filtro){
        divMenu.innerText="";
        if(!listaProd.reserva)
        {
            listaProd.reserva=new Reserva("Usuario 1");
        }
        const ListaAMostrar=listaProd.Lista;
        ListaAMostrar.forEach((producto, index) => {

            if (producto.tieneCantidadDisponibleParaReservar() && (producto.Categoria == filtro || filtro == "Sin Filtro"))
                {
                const li=document.createElement("li");
                const botonReservar = document.createElement("button");
                const botonEliminar = document.createElement("button");
                const botonEditar = document.createElement("button");
                botonReservar.innerText="Reservar";
                botonEliminar.innerText="Eliminar";
                botonEditar.innerText="Editar";
                const content = document.createElement("p");
                content.innerHTML="<b> Nombre del Producto: </b> "+ producto.Nombre +"<br> <b>  Descripcion: </b> "+producto.Descripcion;
                if(producto.tienePrecio()) content.innerHTML+="<br> <b>  Precio: </b> "+producto.Precio;
                if(producto.tieneStock()) content.innerHTML+="<br> <b>  Stock: </b> "+producto.Stock;
                if(producto.tieneCategoria()) content.innerHTML+="<br> <b>  Categoría: </b> "+producto.Categoria + "<br>";
                content.appendChild(botonReservar);
                content.appendChild(botonEliminar);
                content.appendChild(botonEditar);
                li.appendChild(content);
                divMenu.appendChild(li);

                botonReservar.onclick=()=>{
                    let producto=listaProd.Lista[index];
                    listaProd.reserva.añadirProducto(producto);
                    producto.decrementarCantidadDisponibleParaReservar(1);
                    alert("Se reservó el producto escogido");
                    this.ListaProductos(listaProd,filtro);
                }

                botonEliminar.onclick=()=>
                {
                    let producto = listaProd.Lista[index];
                    listaProd.eliminarProducto(producto.Id);
                    alert("Se eliminó el producto");
                    this.ListaProductos(listaProd, filtro);
                }
                
                botonEditar.onclick=()=>
                {
                    let producto = listaProd.Lista[index];
                    prodRef.click();
                    nombre.value=producto.Nombre;
                    descripcion.value=producto.Descripcion;
                    precio.value=producto.Precio;
                    stock.value=producto.Stock;
                    const opcionesCategorias = categoria.options;
                    for (let i = 0; i < opcionesCategorias.length; i++)
                    {
                        if (opcionesCategorias[i].value === producto.Categoria)
                        {
                            categoria.selectedIndex = i;
                            break;
                        }
                    }             
                }
            }
        });
    }
    Reservas(reserva,listaProd)
    {
        divReserva.innerText="";
        const content = document.createElement("p");
        if(reserva.getProductos().length>0)
        {
            content.innerHTML="<p> Nombre de Usuario: "+reserva.NombreUsuario+"</p><p> Productos a Reservar: </p><p>"+reserva.productos.aTexto()+"</p>";
            const CancelarButton=document.createElement("button");
            CancelarButton.innerText="Cancelar Reserva";
            content.appendChild(CancelarButton);
            divReserva.appendChild(content);
            CancelarButton.onclick=()=>{ 
                reserva.CancelarReserva();
                alert("Se canceló la reserva");
                this.Reservas(reserva);
                this.ListaProductos(listaProd,"Sin Filtro");
                }
        }
    }
}
export default Mostrar;