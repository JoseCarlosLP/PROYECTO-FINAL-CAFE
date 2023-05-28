class Producto
{
  constructor(id, nombre, descripcion, categoria)
  {
    this.Id=id;
    this.Nombre=nombre;
    this.Descripcion=descripcion;
    this.CantidadReservada=0;
    this.Categoria=categoria;
  };

  eliminar()
  {
    delete this.Id;
    delete this.Nombre;
    delete this.Descripcion;
    delete this.Stock;
    delete this.CantidadReservada;
    delete this.Categoria;
  };

  aTexto()
  {
    let cadena = "";
    cadena += "Id: " + this.Id.toString() + ", Nombre: " + this.Nombre + ", Descripción: " + this.Descripcion + ", Categoría: " + this.Categoria;
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
    {
      this.Stock=stock;
      this.establecerCantidadDisponibleParaReservar(stock);
    }
  }
  establecerCantidadDisponibleParaReservar(cantidadParaReservar){
    if(this.tieneStock()&&cantidadParaReservar>0&&cantidadParaReservar<=this.Stock)
    {
      this.CantidadDisponibleParaReservar=cantidadParaReservar;
    }
    else
    {
      this.CantidadDisponibleParaReservar=undefined;
    }
  }
  establecerCategoria(categoria)
  {
    this.Categoria=categoria;
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

  tieneCategoria()
  {
    return this.Categoria!=undefined && this.Categoria!="";
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
  incrementarCantidadDisponibleParaReservar(cantidadReservada)
  {
    this.CantidadDisponibleParaReservar+=cantidadReservada;
  };
  decrementarCantidadDisponibleParaReservar(cantidadReservada)
  {
    if(cantidadReservada<this.CantidadDisponibleParaReservar)
      this.CantidadDisponibleParaReservar-=cantidadReservada;
  };
}

export default Producto;