import Producto from "./Producto";
import ListaProductos from "./ListaProductos";

describe("Producto", () => {
  it("deberia crear un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.Id).toEqual(1);
  });

  it("deberia crear una lista de productos", () => {
    let listaProd= new ListaProductos();
    expect(listaProd.Lista.length).toEqual(0);
  });

  it("deberia agregar un producto a la lista", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    let listaProd= new ListaProductos();
    listaProd.añadirProducto(prod1);
    expect(listaProd.Lista.length).toEqual(1);
  });
});
