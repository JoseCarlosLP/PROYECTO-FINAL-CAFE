describe("index", () => {
  it("Verifica que al cargar la pagina, se muestre la pantalla de menu para cliente", () => {
    cy.visit("/");
    cy.get("#vista_menu").should("contain", "MENU");
  });

  it("Verifica que el menu este vacio mientras no se hayan creado productos", () => {
    cy.visit("http://localhost:1234/#seccion-menu");
    cy.get("#divMenu").should('be.empty')
  });
});
