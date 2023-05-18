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
  
  aTextoConPrecio()
  {
    let cadena = "";
    cadena=this.aTexto();
    cadena+=", Precio: "+ this.Precio;
    return cadena;
  };

  establecerStock(stock)
  {
    if(stock>0)
      this.Stock=stock;
  }

  aTextoConStock()
  {
    let cadena = "";
    if(this.Precio==undefined)
      this.Precio=0;
    if(this.Stock==undefined)
      this.Stock=0;
    cadena+=this.aTextoConPrecio(); cadena+=", Stock: "+ this.Stock;
    return cadena;
  }

  tienePrecio()
  {
    return this.Precio!=undefined && this.Precio!=0;
  }

  tieneStock()
  {
    return this.Stock!=undefined && this.Stock!=0
  }

  incrementarStock(cantidadReservada)
  {
    this.Stock+=cantidadReservada;
  };
  
  decrementarStock(cantidadReservada)
  {
    if(cantidadReservada<this.Stock)
      this.Stock-=cantidadReservada;
  }

}

export default Producto;