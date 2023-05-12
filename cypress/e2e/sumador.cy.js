describe("index", () => {
  it("Verifica que los valores ingresados se lean correctamente", () => {
    cy.visit("/");
    cy.get("#nombre").type("Galletas");
    cy.get("#descripcion").type("Galletas de chocolate con relleno de crema");
    cy.get("#guardar-button").click();
    cy.get("#resultado-div").should("contain", "Nombre: Galletas, Descripcion: Galletas de chocolate con relleno de crema");
  });
});
