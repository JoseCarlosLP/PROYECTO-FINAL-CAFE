class Producto
{
  constructor(id, nombre, descripcion)
  {
    this.Id=id;
    this.Nombre=nombre;
    this.Descripcion=descripcion;
    this.CantidadReservada=0;
  };

  eliminar()
  {
    delete this.Id;
    delete this.Nombre;
    delete this.Descripcion;
    delete this.Stock;
    delete this.CantidadReservada;
  };

  aTexto()
  {
    let cadena = "";
    cadena += "Id: " + this.Id.toString() + ", Nombre: " + this.Nombre + ", Descripción: " + this.Descripcion;
    return cadena;
  };

  establecerPrecio(precio)
  {
    this.Precio=precio;
  }
}

export default Producto;