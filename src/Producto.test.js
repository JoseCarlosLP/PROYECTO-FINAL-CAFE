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
  it("no deberia establecer la cantidad disponible para reservar si no se tiene stock", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerCantidadDisponibleParaReservar(100);
    expect(prod1.CantidadDisponibleParaReservar).toEqual(undefined);
  });
  it("no deberia establecer la cantidad disponible para reservar negativa", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerStock(100);
    prod1.establecerCantidadDisponibleParaReservar(-100);
    expect(prod1.CantidadDisponibleParaReservar).toEqual(undefined);
  });
  it("deberia establecer la cantidad disponible si es positiva y se tiene stock", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerStock(100);
    prod1.establecerCantidadDisponibleParaReservar(100);
    expect(prod1.CantidadDisponibleParaReservar).toEqual(100);
  });
  it("no deberia establecer la cantidad disponible para reservar si es mayor al stock", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerStock(100);
    prod1.establecerCantidadDisponibleParaReservar(200);
    expect(prod1.CantidadDisponibleParaReservar).toEqual(undefined);
  });
  it("no deberia establecer la cantidad disponible para reservar igual al stock", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema", "Refrigerios");
    prod1.establecerStock(100);
    expect(prod1.CantidadDisponibleParaReservar).toEqual(100);
  });
  it("no deberia decrementar el stock si la cantidad reservada es mayor al stock", () => {
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerStock(10);
    prod1.decrementarStock(15);
    expect(prod1.Stock).toEqual(10);
  });
  it("no deberia decrementar la cantidad reservada si es mayor a la Cantidad disponible para reservar",()=>{
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    prod1.establecerStock(10);
    prod1.decrementarCantidadDisponibleParaReservar(15);
    expect(prod1.CantidadDisponibleParaReservar).toEqual(10);
  });
  it("Al asignar un stock, la cantidad disponible para reservar deberia actualizarse y ser distinta de cero  ",()=>{
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.tieneCantidadDisponibleParaReservar()).toEqual(false);
    prod1.establecerStock(10);
    expect(prod1.tieneCantidadDisponibleParaReservar()).toEqual(true);
    expect(prod1.CantidadDisponibleParaReservar).toEqual(10);
  });
  it("Al asignar una categoria, el producto debería actualizarse",()=>{
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.tieneCantidadDisponibleParaReservar()).toEqual(false);
    prod1.establecerCategoria("Refrigerios");
    expect(prod1.tieneCategoria()).toEqual(true);
  });
  it("Se deberia poder ver un producto en formato bonito",()=>{
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema","Refrigerios");
    prod1.establecerPrecio(5);
    expect(prod1.aTextoBonito()).toEqual("Nombre: Galletas<br>Descripción: Galletas de chocolate con relleno de crema<br>Categoría: Refrigerios<br>Precio: 5");
  });
});