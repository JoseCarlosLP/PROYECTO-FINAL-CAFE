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

    it("deberia agregar varios productos a la lista", () => {
      let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
      let prod2= new Producto(2, "Cereales", "Cereales Fruit Loops");
      let prod3= new Producto(3, "Coca Cola", "Coca Cola de 300 ml.");
      let listaProd= new ListaProductos();
      listaProd.añadirProducto(prod1);
      listaProd.añadirProducto(prod2);
      listaProd.añadirProducto(prod3);
      expect(listaProd.Lista.length).toEqual(3);
  });
});
