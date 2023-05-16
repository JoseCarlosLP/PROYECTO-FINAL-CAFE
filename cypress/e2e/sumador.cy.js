describe("index", () => {
  it("Verifica que los valores ingresados de un producto se lean correctamente", () => {
    cy.visit("/");
    cy.get("#nombre").type("Galletas");
    cy.get("#descripcion").type("Galletas de chocolate con relleno de crema");
    cy.get("#guardar-button").click();
    cy.get("#resultadoProducto-div").should("contain", "Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema");
  });

  it("Verifica que los valores ingresados de varios productos se lean correctamente", () => {
    cy.visit("/");
    cy.get("#nombre").type("Galletas");
    cy.get("#descripcion").type("Galletas de chocolate con relleno de crema");
    cy.get("#guardar-button").click();
    cy.get("#nombre").type("Cereales");
    cy.get("#descripcion").type("Cereales Fruit Loops");
    cy.get("#guardar-button").click();
    cy.get("#resultadoProducto-div").should("contain", "Id: 2, Nombre: Cereales, Descripción: Cereales Fruit Loops");
    cy.get("#resultadoLista-div").should("contain", "Id: 1, Nombre: Galletas, Descripción: Galletas de chocolate con relleno de crema, Precio: 0, Stock: 0; Id: 2, Nombre: Cereales, Descripción: Cereales Fruit Loops, Precio: 0, Stock: 0")
  }); 

  it("Verifica que el menu este vacio mientras no se hayan creado productos", () => {
    cy.visit("http://localhost:1234/#seccion-menu");
    cy.get("#menuDisponible").should('be.empty')
  });
});
