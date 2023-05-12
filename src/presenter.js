  import Producto from "./Producto";
  import ListaProductos from "./ListaProductos";

const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#producto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "Nombre: " + nombre.value + ", Descripción: " + descripcion.value;
});
