import Producto from "./Producto";
import ListaProductos from "./ListaProductos";

describe("ListaProductos", () => {
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
  
    it("deberia eliminar un producto de la lista", () => {
      let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
      let listaProd= new ListaProductos();
      listaProd.añadirProducto(prod1);
      listaProd.eliminarProducto(1);
      expect(listaProd.Lista[0]).toEqual(undefined);
    });
  
    it("deberia eliminar un producto de la lista y recorrer los elementos hacia la posición vacía", () => {
      let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
      let prod2= new Producto(2, "Cereales", "Cereales Fruit Loops");
      let prod3= new Producto(3, "Coca Cola", "Coca Cola de 300 ml.");
      let listaProd= new ListaProductos();
      listaProd.añadirProducto(prod1);
      listaProd.añadirProducto(prod2);
      listaProd.añadirProducto(prod3);
      listaProd.eliminarProducto(1);
      expect(listaProd.Lista[0].Id).toEqual(2);
      expect(listaProd.Lista.length).toEqual(2);
    });
  
    it("No deberia eliminar un producto inexistente en la lista", () => {
      let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
      let listaProd= new ListaProductos();
      listaProd.añadirProducto(prod1);
      listaProd.eliminarProducto(7);
      expect(listaProd.Lista[0].Id).toEqual(1);
    });

    
    it("Deberia converir a texto el contenido de una lista", () => {
        let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
        let prod2= new Producto(2, "Cereales", "Cereales Fruit Loops");
        let prod3= new Producto(3, "Coca Cola", "Coca Cola de 300 ml.");
        let listaProd= new ListaProductos();
        listaProd.añadirProducto(prod1);
        listaProd.añadirProducto(prod2);
        listaProd.añadirProducto(prod3);
        expect(listaProd.aTexto()).toEqual("Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema;Id: 2, Nombre: Cereales, Descripción: Cereales Fruit Loops;Id: 3, Nombre: Coca Cola, Descripción: Coca Cola de 300 ml.");
        });
  });