const elements = {
  signinButton: `[data-testid="qa-myaccount"]`,
  myAccountButton: ".menu-title",
  searchInput: `[data-testid="qa-search-input"]`,
  addToCartButton: `[data-testid="qa-quick-shop"]`,
  viewCartButton: `[data-testid="qa-cartcheckout"]`,
  catalogiFrame: `[data-tagging-id="AW-1070784593"]`,
  catalogWrapper: `[data-testid="qa-catalog-wrappert"]`,
};

function searchForTerm(searchTerm) {
  cy.get(elements.searchInput)
    .should("be.visible")
    .type(searchTerm)
    .type("{enter}");
}

function addNthItemToCart(searchTerm, nthElement) {
  const i = nthElement - 1;
  searchForTerm(searchTerm);
  cy.get(elements.addToCartButton).eq(i).click();
}

function viewCart() {
  cy.get(elements.viewCartButton).should("be.visible").click();
  cy.url().should("contain", "viewcart");
}

export default {
  elements,
  searchForTerm,
  addNthItemToCart,
  viewCart,
};
