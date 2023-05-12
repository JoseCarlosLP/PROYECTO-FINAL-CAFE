import Producto from "./Producto";

describe("Producto", () => {
  it("deberia crear un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.Id).toEqual(1);
  });
});