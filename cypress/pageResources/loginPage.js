import homePage from "./homePage";

const elements = {
  userNameInput: "#loginUsername",
  continueButton: "#continue-btn",
  passwordInput: "#loginPassword",
  signinButton: "#login-btn",
  acceptCookiesButton: "[id*=onetrust-accept]",
};

function login(username, password) {
  cy.visit("/");
  cy.get(homePage.elements.signinButton).should("be.visible").click();
  cy.get(elements.acceptCookiesButton)
    .should("be.visible")
    .click()
    .should("not.be.visible");
  cy.get(elements.userNameInput).should("be.visible").type(username);
  cy.get(elements.continueButton).click();
  cy.get(elements.passwordInput)
    .should("be.visible")
    .type(password, { log: false })
    .blur();
  cy.get(elements.signinButton).click();
  cy.get(homePage.elements.myAccountButton)
    .should("be.visible")
    .should("have.text", "my Account");
}

export default {
  elements,
  login,
};
