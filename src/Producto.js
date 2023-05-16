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
    this.Stock=stock;
  }

  aTextoConStock()
  {
    let cadena = "";
    cadena=this.aTextoConPrecio();
    cadena+=", Stock: "+ this.Stock;
    return cadena;
  }

  tienePrecio()
  {
    return producto.Precio!=undefined && producto.Precio!=0;
  }

  tieneStock()
  {
    return producto.Stock!=undefined && producto.Stock!=0
  }

}

export default Producto;