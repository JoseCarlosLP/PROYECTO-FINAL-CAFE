import Producto from "./Producto";

describe("Producto", () => {
  it("deberia crear un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.Id).toEqual(1);
  });

  it("deberia convertir un producto a texto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    expect(prod1.aTexto()).toEqual("Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema, Categoría: Refrigerios");
  });

  it("deberia establecer el precio de un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerPrecio(10);
    expect(prod1.Precio).toEqual(10);
  });

  it("deberia convertir un producto con precio a texto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerPrecio(10);
    expect(prod1.aTextoConPrecio()).toEqual("Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema, Categoría: Refrigerios, Precio: 10");
  });

  it("deberia establecer el stock de un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerStock(100);
    expect(prod1.Stock).toEqual(100);
  });
  
  it("deberia convertir un producto con stock a texto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerPrecio(10);
    prod1.establecerStock(50);
    expect(prod1.aTextoConStock()).toEqual("Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema, Categoría: Refrigerios, Precio: 10, Stock: 50");
  });

  it("deberia incrementar el stock dada una cantidad", () => {
      let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
      prod1.establecerStock(10);
      prod1.incrementarStock(5);
      expect(prod1.Stock).toEqual(15);
  });
  it("deberia decrementar el stock dada una cantidad reservada", () => {
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerStock(10);
    prod1.decrementarStock(5);
    expect(prod1.Stock).toEqual(5);
  });
  it("deberia retornar verdadero para un producto con precio", () => {
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerPrecio(10);
    expect(prod1.tienePrecio()).toEqual(true);
  });
  it("deberia retornar verdadero para un producto con stock", () => {
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerStock(10);
    expect(prod1.tieneStock()).toEqual(true);
  });
  it("no deberia establecer el stock de un producto si es negativo", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerStock(-100);
    expect(prod1.Stock).toEqual(undefined);
  });
  it("no deberia decrementar el stock si la cantidad reservada es mayor al stock", () => {
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerStock(10);
    prod1.decrementarStock(15);
    expect(prod1.Stock).toEqual(10);
  });
});