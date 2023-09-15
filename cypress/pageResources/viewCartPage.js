const elements = {
  closeAlertButton: `#gtm__modal-close`,
  checkoutButton: `[data-testid="qa-cart-checkout"]`,
  cartPrice: '[data-testid="qa-product-sale-price"]',
};

function gotoCheckout() {
  cy.get(elements.closeAlertButton).should("be.visible").click();
  cy.get(elements.checkoutButton).should("be.visible").click();
  cy.url().should("contain", "checkout");
}
function getItemPrice() {
  return cy
    .get(elements.listPrice)
    .invoke("text")
    .then((text) => {
      return text.slice(15);
    });
}

export default {
  elements,
  gotoCheckout,
  getItemPrice,
};
