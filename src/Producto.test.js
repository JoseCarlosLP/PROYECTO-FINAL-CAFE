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
});