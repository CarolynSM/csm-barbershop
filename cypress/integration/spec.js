describe("Unsplash App", () => {
  it("works", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "My Photos");
    cy.get("li").should("have.length.of", 6);
    cy
      .get(".grid-button")
      .should("contain", "Grid")
      .click();
    cy
      .get("img")
      .eq(2)
      .click();
    cy.get(".username");
    cy.get(".detail-close").click();
    cy.get("li").should("have.length.of", 6);
  });
});
