  import Producto from "./Producto";
  import ListaProductos from "./ListaProductos";

const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#crearProducto-form");
const div = document.querySelector("#resultado-div");
let listaProd = new ListaProductos();
let contadorId = 1;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let productoAAñadir = new Producto(contadorId, nombre.value, descripcion.value);
  listaProd.añadirProducto(productoAAñadir);
  contadorId+=1;
  div.innerHTML = "Nombre: " + nombre.value + ", Descripcion: " + descripcion.value;
});
