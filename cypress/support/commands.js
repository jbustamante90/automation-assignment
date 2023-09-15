import { homePage, loginPage } from "../pageResources";

function login(username, password) {
  cy.viewport(1280, 720);
  cy.session(
    `session-${username}`,
    () => {
      loginPage.login(username, password);
    },
    {
      validate() {
        cy.getCookie("x-sk-signed-user").should("exist");
      },
      cacheAcrossSpecs: true,
    }
  );
}

Cypress.Commands.add("login", login);
