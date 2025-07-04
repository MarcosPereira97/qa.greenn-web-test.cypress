describe("Checkout", () => {
  beforeEach(() => {
    cy.loginWithSession({
      email: users.standard_user,
      password: users.password,
    });
    cy.visit("/inventory.html");
  });

  it("Deve ser possível remover um produto do carrinho", () => {
    cy.addProductToCart();
    cy.RemoveProductToCart();
    cy.screenshot();
  });

  it("Não deve permitir acessar o checkout com o campo username em branco", () => {
    cy.addProductToCart();
    cy.accessCartPage();
    cy.validateCheckoutError({
      lastname: "qa",
      zipcode: "123",
      expectedMessage: "Error: First Name is required",
    });
    cy.screenshot();
  });

  it("Não deve permitir acessar o checkout com o campo lastname em branco", () => {
    cy.addProductToCart();
    cy.accessCartPage();
    cy.validateCheckoutError({
      username: "Test",
      zipcode: "123",
      expectedMessage: "Error: Last Name is required",
    });
    cy.screenshot();
  });

  it("Não deve permitir acessar o checkout com o campo zipcode em branco", () => {
    cy.addProductToCart();
    cy.accessCartPage();
    cy.validateCheckoutError({
      username: "Test",
      lastname: "qa",
      expectedMessage: "Error: Postal Code is required",
    });
    cy.screenshot();
  });

  it("Deve ser possível finalizar o pedido", () => {
    cy.addProductToCart();
    cy.accessCartPage();
    cy.fillCheckoutForm({ username: "Test", lastname: "qa", zipcode: "123" });
    cy.finishCheckout({ expectedMessage: "Thank you for your order!" });
    cy.screenshot();
  });

  it("Campo first name sendo apagado ao preencher campo last name", () => {
    cy.loginWithSession({
      email: users.problem_user,
      password: users.password,
    });
    cy.visit("/inventory.html");
    cy.addProductToCart();
    cy.accessCartPage();
    cy.validateWord({ username: "QA", lastname: "test", zipcode: "1234" });
    cy.screenshot();
  });
});
