const elements = {
  closeAlertButton: `[id="gtm__modal-btn-close"]`,
  checkoutButton: `[data-testid="qa-cart-checkout"]`,
};

function gotoCheckout() {
  cy.get(elements.closeAlertButton).should("be.visible").click();
  cy.get(elements.checkoutButton).should("be.visible").click();
  cy.url().should("contain", "checkout");
}

export default {
  elements,
  gotoCheckout,
};
