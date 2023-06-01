describe("index", () => {
  it("Verifica que al cargar la pagina, se muestre la pantalla de menu para cliente", () => {
    cy.visit("/");
    cy.get("#vista_menu").should("contain", "MENU");
  });

  it("Verifica que el menu este vacio mientras no se hayan creado productos", () => {
    cy.visit("http://localhost:1234/#seccion-menu");
    cy.get("#divMenu").should('be.empty')
  });
  it("Verifica que cambie a la vista Administrador", () => {
    cy.visit("/");
    cy.get("#cambiarVista").click();
    cy.get("#vista_admin").should('not.have.css','display','block');
    cy.get("#vista_menu").should('not.have.css','display','none');
  });

});
