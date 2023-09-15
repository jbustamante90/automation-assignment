declare namespace Cypress {
  interface Chainable {
    login(): Chainable<any>;
    getIframeBody(): Chainable<any>;
  }
}
