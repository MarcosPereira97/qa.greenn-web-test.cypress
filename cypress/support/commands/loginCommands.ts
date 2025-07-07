import { LoginData } from "cypress/interfaces/TestData";
import { LoginPage } from "@pages/LoginPage";

let loginPage = new LoginPage();

Cypress.Commands.add("doLogin", (data?: LoginData) => {
  if (data?.email) {
    loginPage.getUsernameField().type(data.email);
  }

  if (data?.password) {
    loginPage.getPasswordField().type(data.password, { log: false });
  }

  loginPage.getLoginButton().click();
});

Cypress.Commands.add("loginSuccessfully", (data: LoginData) => {
  cy.doLogin(data);
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add("loginWithSession", (data: LoginData) => {
  cy.session([data.email, data.password], () => {
    cy.visitSite({ url: "/" });
    cy.loginSuccessfully(data);
  });
});

Cypress.Commands.add("validateLoginError", (data: LoginData) => {
  cy.doLogin(data);
  loginPage.getErrorMessage().should("have.text", data.expectedMessage);
});
