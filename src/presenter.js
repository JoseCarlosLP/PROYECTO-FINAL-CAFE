import Producto from "./Producto";
import ListaProductos from "./ListaProductos";
import Mostrar from "./classMostrar";
const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const stock = document.querySelector("#stock");
const categoria = document.querySelector("#categoria");
const form = document.querySelector("#crearProducto-form");
const divProducto = document.querySelector("#resultadoProducto-div");
const divLista = document.querySelector("#resultadoLista-div");
const misReservasRef = document.getElementById("verReserva-button");
const prodRef = document.getElementById("productos-ref");
const divReserva=document.getElementById("divReserva");
const menu_btns =document.getElementsByClassName("menu_btn");
const botoncambiarVista = document.querySelector("#cambiarVista");
const botoncambiarVistaReserva = document.querySelector("#cambiarVistaReserva");
const tipoVistaTexto = document.querySelector("#tipoVistaTexto");
const tipoVistaTextoReserva = document.querySelector("#tipoVistaTextoReserva");

let listaProd = new ListaProductos();
let contadorId = 1;
let productoAAñadir;
let mostrar=new Mostrar();
let tipoVista = "Usuario";

const div_vistaAdmin = document.getElementById('vista_admin');
const div_vistaMenu = document.getElementById('vista_menu');
const div_vistaMisReservas = document.getElementById('vista_MisReservas');

const catElegida = document.getElementById("filtro");

window.addEventListener('load',function(){
div_vistaAdmin.style.display = 'none';
div_vistaMisReservas.style.display='none';
div_vistaMenu.style.display = 'block';

})

for (var i = 0; i < menu_btns.length; i++) {
menu_btns[i].addEventListener('click',function(){
  div_vistaAdmin.style.display = 'none';
  div_vistaMisReservas.style.display='none';
  div_vistaMenu.style.display = 'block';
  mostrar.ListaProductos(listaProd,"Sin Filtro",tipoVista);
})
}

const botonesCategorias = document.querySelectorAll("button[data-filtro]");
botonesCategorias.forEach(function(boton) {
boton.addEventListener("click", function() {
  const nuevoFiltro = this.getAttribute("data-filtro");
  catElegida.setAttribute("data-filtro", nuevoFiltro);
  mostrar.ListaProductos(listaProd,catElegida.getAttribute("data-filtro"),tipoVista);
});
});

botoncambiarVista.addEventListener("click", function()
{
  if(prodRef.style.display=="none")
  {
    prodRef.style.display="block";
    tipoVista="Administrador";
  }
  else if(prodRef.style.display=="block")
  {
    prodRef.style.display="none";
    tipoVista="Usuario";
  }
  tipoVistaTexto.textContent="Tipo de vista actual: "+tipoVista;
  mostrar.ListaProductos(listaProd,"Sin Filtro",tipoVista);
});

botoncambiarVistaReserva.addEventListener("click", function()
{
  if(tipoVista=="Usuario")
  {
    prodRef.style.display="block";
    tipoVista="Administrador";
  }
  else if(tipoVista=="Administrador")
  {
    prodRef.style.display="none";
    tipoVista="Usuario";
  }
  tipoVistaTextoReserva.textContent="Tipo de vista actual: "+tipoVista;
  mostrar.Reservas(listaProd.reserva,listaProd,tipoVista);
});


prodRef.addEventListener('click',function(){
div_vistaMenu.style.display = 'none';
div_vistaMisReservas.style.display='none';
div_vistaAdmin.style.display = 'block';  
})

misReservasRef.addEventListener("click", function(){
div_vistaAdmin.style.display = 'none';
div_vistaMenu.style.display = 'none';
div_vistaMisReservas.style.display='block';
divReserva.innerText="";
mostrar.Reservas(listaProd.reserva,listaProd,tipoVista);
});

form.addEventListener("submit", (event) => {``
event.preventDefault();

if (nombre.value.trim() !== "" && descripcion.value.trim() !== "") {
  productoAAñadir = new Producto(contadorId, nombre.value, descripcion.value);
  productoAAñadir.establecerPrecio(precio.value);
  productoAAñadir.establecerStock(stock.value);
  productoAAñadir.establecerCategoria(categoria.value)
  listaProd.añadirProducto(productoAAñadir);
  contadorId++;

  nombre.value = "";
  descripcion.value = "";
  precio.value = 0;
  stock.value = 0;
  mostrar.ListaProductos(listaProd,"Sin Filtro",tipoVista);
}
else
{
  alert("Ingrese valores válidos para nombre y descripción.");
  return;
}
});