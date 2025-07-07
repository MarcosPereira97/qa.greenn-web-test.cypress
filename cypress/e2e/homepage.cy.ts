describe("Homepage", () => {
  beforeEach(() => {
    cy.loginWithSession({
      email: users.standard_user,
      password: users.password,
    });
    cy.visit("/inventory.html");
  });

  it("Deve exibir imagens diferentes para cada produto", () => {
    cy.validateDifferentImages();
    cy.screenshot();
  });

  it("Deve permitir adicionar qualquer produto ao carrinho", () => {
    cy.addProductToCart();
    cy.screenshot();
  });

  it("Deve manter nome, valor e imagem consistentes entre homepage e página de detalhes", () => {
    cy.compareProductInfo();
    cy.screenshot();
  });

  it("Deve ordenar corretamente por nome (Z até A)", () => {
    cy.sortItems(1);
    cy.screenshot();
  });

  it("Deve ordenar corretamente por preço (menor para maior) ", () => {
    cy.sortItems(2);
    cy.screenshot();
  });

  it("Deve ordenar corretamente por preço (maior para Menor)", () => {
    cy.sortItems(3);
    cy.screenshot();
  });
});
