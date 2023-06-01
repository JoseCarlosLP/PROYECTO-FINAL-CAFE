import Reserva from "./Reserva";
const prodRef = document.getElementById("productos-ref");
const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const stock = document.querySelector("#stock");
const categoria = document.querySelector("#categoria");

const divReservasCompletadas=document.getElementById("divReservasCompletadas");
let reservasEntregadas=[];

class Mostrar{
    constructor(){
    };
    ListaProductos(listaProd,filtro,vista){
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
                if(vista=="Usuario")
                {
                    botonEliminar.style.display="none";
                    botonEditar.style.display="none";
                }
                divMenu.appendChild(li);

                botonReservar.onclick=()=>{
                    let producto=listaProd.Lista[index];
                    listaProd.reserva.añadirProducto(producto);
                    producto.decrementarCantidadDisponibleParaReservar(1);
                    alert("Se reservó el producto escogido");
                    this.ListaProductos(listaProd,filtro,vista);
                }

                botonEliminar.onclick=()=>
                {
                    let producto = listaProd.Lista[index];
                    listaProd.eliminarProducto(producto.Id);
                    alert("Se eliminó el producto");
                    this.ListaProductos(listaProd, filtro,vista);
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
                    listaProd.eliminarProducto(producto.Id);
                }
            }
        });
    }
    Reservas(reserva,listaProd)
    {
        divReserva.innerText="";
        if(reserva.getProductos().length>0)
        {
            this.ReservasPendientes(divReserva,reserva,listaProd);
            this.ReservasCompletadas();
        }
    }

    ReservasPendientes(divReserva,reserva,listaProd){

        const subtitulo = document.createElement("h3");
        subtitulo.innerHTML="<h3>MIS RESERVAS PENDIENTES</h3>";
        divReserva.appendChild(subtitulo);
        if(reserva.estadoReserva=="Pendiente"){
            const content = document.createElement("p");
            content.innerHTML="<p> Nombre de Usuario: "+reserva.NombreUsuario+"</p><p> Productos a Reservar: </p><p>"+reserva.productos.aTextoConCantidadReservada()+"</p>";
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
    
            const ConfirmarEntregaButton=document.createElement("button");
            ConfirmarEntregaButton.innerText="Confirmar recepcion del pedido";
            content.appendChild(ConfirmarEntregaButton);
            divReserva.appendChild(content);
            ConfirmarEntregaButton.onclick=()=>{ 
                reserva.confirmarEntrega();
                alert("Se confirmo la recepcion del pedido exitosamente");
                reservasEntregadas.push(reserva);
                listaProd.reserva=new Reserva("Usuario 1");
                this.Reservas(reserva,listaProd);
                this.ListaProductos(listaProd,"Sin Filtro");
            }
        }
    }

    ReservasCompletadas(){
        divReservasCompletadas.innerText="";
        const subtitulo = document.createElement("h3");
        subtitulo.innerHTML="<h3>MIS RESERVAS COMPLETADAS</h3>";
        divReservasCompletadas.appendChild(subtitulo);
        for(let i=0;i<reservasEntregadas.length;i++)
        {
            const content = document.createElement("p");
            content.innerHTML="<p> <b> Nombre de Usuario </b>: "+reservasEntregadas[i].NombreUsuario+"</p><p> Productos Reservados: </p><p>"+reservasEntregadas[i].productos.aTextoConCantidadReservada()+"</p>";
            divReservasCompletadas.appendChild(content);
        }
    }
}
export default Mostrar;