  import Producto from "./Producto";
  import ListaProductos from "./ListaProductos";

const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const stock = document.querySelector("#stock");
const form = document.querySelector("#crearProducto-form");
const divProducto = document.querySelector("#resultadoProducto-div");
const divLista = document.querySelector("#resultadoLista-div");

const listaMenu = document.getElementById("menuDisponible");
const menuRef = document.getElementById("menu-ref");

let listaProd = new ListaProductos();
let contadorId = 1;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nombre.value.trim() !== "" && descripcion.value.trim() !== "") {
    let productoAAñadir = new Producto(contadorId, nombre.value, descripcion.value);
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
  }
  else
  {
    alert("Ingrese valores válidos para nombre y descripción.");
    return;
  }
});

menuRef.addEventListener('click',function(){
  listaMenu.innerHTML="";  //Cada que se hace click, la lista se vacia y se evita duplicar el menu
  listaMenu=listaProd.mostrarMenuDisponible(listaMenu);
})