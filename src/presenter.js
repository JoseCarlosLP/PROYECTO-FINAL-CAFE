  import Producto from "./Producto";
  import ListaProductos from "./ListaProductos";

const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#crearProducto-form");
const divProducto = document.querySelector("#resultadoProducto-div");
const divLista = document.querySelector("#resultadoLista-div");
let listaProd = new ListaProductos();
let contadorId = 1;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nombre.value.trim() !== "" && descripcion.value.trim() !== "") {
    let productoAAñadir = new Producto(contadorId, nombre.value, descripcion.value);
    listaProd.añadirProducto(productoAAñadir);
    contadorId++;

    divProducto.innerHTML = productoAAñadir.aTexto();
    divLista.innerHTML = listaProd.aTexto();

    nombre.value = "";
    descripcion.value = "";
  }
  else
  {
    alert("Ingrese valores válidos para nombre y descripción.");
    return;
  }
});

