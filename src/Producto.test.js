import Producto from "./Producto";

describe("Producto", () => {
  it("deberia crear un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.Id).toEqual(1);
  });

  it("deberia convertir un producto a texto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.aTexto()).toEqual("Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema");
  });

  it("deberia establecer el precio de un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerPrecio(10);
    expect(prod1.Precio).toEqual(10);
  });

  it("deberia convertir un producto con precio a texto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerPrecio(10);
    expect(prod1.aTextoConPrecio()).toEqual("Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema, Precio: 10");
  });

  it("deberia establecer el stock de un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerStock(100);
    expect(prod1.Stock).toEqual(100);
  });
  
  it("deberia convertir un producto con stock a texto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerPrecio(10);
    prod1.establecerStock(50);
    expect(prod1.aTextoConStock()).toEqual("Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema, Precio: 10, Stock: 50");
  });

    it("deberia incrementar el stock dada una cantidad", () => {
      let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
      prod1.asignarCantidad(10);
      prod1.incrementarStock(5);
      expect(prod1.Stock).toEqual(15);
  });
});