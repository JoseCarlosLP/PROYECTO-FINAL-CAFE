  import Producto from "./Producto";
  import ListaProductos from "./ListaProductos";
  import Mostrar from "./classMostrar";
const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const stock = document.querySelector("#stock");
const form = document.querySelector("#crearProducto-form");
const divProducto = document.querySelector("#resultadoProducto-div");
const divLista = document.querySelector("#resultadoLista-div");
const menuRef = document.getElementById("menu-ref");
const prodRef = document.getElementById("productos-ref");
const formVerReserva=document.querySelector("#MostrarReserva-form");
const divReserva=document.getElementById("divReserva");

let listaProd = new ListaProductos();
let contadorId = 1;
let productoAAñadir;
let mostrar=new Mostrar();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nombre.value.trim() !== "" && descripcion.value.trim() !== "") {
    productoAAñadir = new Producto(contadorId, nombre.value, descripcion.value);
    productoAAñadir.establecerPrecio(precio.value);
    productoAAñadir.establecerStock(stock.value);
    listaProd.añadirProducto(productoAAñadir);
    contadorId++;

    divProducto.innerHTML = productoAAñadir.aTextoConStock();
    divLista.innerHTML = listaProd.aTexto();

    nombre.value = "";
    descripcion.value = "";
    precio.value = 0;
    stock.value = 0;
    mostrar.ListaProductos(listaProd);
  }
  else
  {
    alert("Ingrese valores válidos para nombre y descripción.");
    return;
  }
});

menuRef.addEventListener('click',function(){
  mostrar.ListaProductos(listaProd);
})

prodRef.addEventListener('click',function(){
  divProducto.innerHTML = productoAAñadir.aTextoConStock();
  divLista.innerHTML = listaProd.aTexto();
})

formVerReserva.addEventListener("submit", (event) => {
  event.preventDefault();
  divReserva.innerText="";
  mostrar.Reservas(listaProd.reserva,listaProd)
});