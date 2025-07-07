import "./commands/loginCommands";
import "./commands/productCommands";
import "./commands/checkoutCommands";

import { CheckoutData, LoginData, URL } from "cypress/interfaces/TestData";

// @ts-ignore
Cypress.Commands.overwrite("type", (originalFn, subject, text, options) => {
  if (options && options.log === false) {
    Cypress.log({
      //@ts-ignore
      $el: subject,
      name: "type",
      message: "******",
    });
  }
  //@ts-ignore
  return originalFn(subject, text, options);
});

Cypress.Commands.add(
  "getVisible",
  (selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(selector).should("be.visible");
  }
);

Cypress.Commands.add("visitSite", (data: URL) => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
  cy.visit(data);
});

declare global {
  namespace Cypress {
    interface Chainable {
      doLogin(data?: LoginData): Chainable<void>;
      loginSuccessfully(data: LoginData): Chainable<void>;
      loginWithSession(data: LoginData): Chainable<void>;
      validateLoginError(data: LoginData): Chainable<void>;
      validateSameImages(): Chainable<void>;
      addProductToCart(): Chainable<void>;
      validateDifferentImages(): Chainable<void>;
      compareProductInfo(): Chainable<void>;
      sortItems(sortOption: number): Chainable<void>;
      getVisible: (selector: string) => Cypress.Chainable<JQuery<HTMLElement>>;
      accessProductPage(): Chainable<void>;
      accessCartPage(): Chainable<void>;
      fillCheckoutForm(data?: CheckoutData): Chainable<void>;
      finishCheckout(data: CheckoutData): Chainable<void>;
      validateCheckoutError(data: CheckoutData): Chainable<void>;
      validateWord(data: CheckoutData): Chainable<void>;
      visitSite(data: URL): Chainable<void>;
      RemoveProductToCart(): Chainable<void>;
    }
  }
}
