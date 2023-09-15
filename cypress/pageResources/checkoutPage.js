const elements = {
  continueButton: `[data-testid="qa-referral-code-continue"]`,
  continueWithoutReferalButton: `[data-testid="qa-confirm-yes"]`,
  addNewAddressButton: `.new-address-tab`,
  firstNameInput: `[data-testid="qa-first-name"]`,
  lastNameInput: `[data-testid="qa-last-name"]`,
  address1Input: `[data-testid="qa-address1"]`,
  cityInput: `[data-testid="qa-city"]`,
  stateSelect: `[data-testid="qa-state"]`,
  countrySelect: `[data-testid="qa-country"]`,
  zipCodeInput: `[data-testid="qa-code"]`,
  shippContinueButton: `[data-testid="qa-ship-continue"]`,
  suggestionSaveButton: `[data-testid="qa-suggestion-save"]`,
  shippMethodContinueButton: `[data-testid="qa-ship-methods-continue"]`,
  cardNameInput: `[data-testid="qa-card-first-name"]`,
  cardLastNameInput: `[data-testid="qa-card-last-name"]`,
  cardNumberInput: `[data-testid="qa-pay-card"]`,
  cardMonthInput: `[data-testid="qa-pay-month"]`,
  cardYearInput: `[data-testid="qa-pay-year"]`,
  cardCVVInput: `[data-testid="qa-pay-code"]`,
};

function fillShippingDetails(shippingInfo) {
  cy.get(elements.continueButton).click();
  cy.get(elements.continueWithoutReferalButton).click();
  cy.get(elements.addNewAddressButton).click();
  cy.get(elements.firstNameInput).type(shippingInfo.name);
  cy.get(elements.lastNameInput).type(shippingInfo.lastName);
  cy.get(elements.address1Input).type(shippingInfo.address);
  cy.get(elements.cityInput).type(shippingInfo.city);
  cy.get(elements.stateSelect).select(shippingInfo.state);
  cy.get(elements.zipCodeInput).type(shippingInfo.zipCode);
  cy.get(elements.shippContinueButton).click();
  cy.get(elements.suggestionSaveButton)
    .should("be.visible")
    .click()
    .should("not.be.visible");
  cy.get(elements.shippContinueButton).click();
  cy.get(elements.shippMethodContinueButton).should("be.visible").click();
}

function fillCardDetails(cardInfo) {
  cy.get(elements.cardNameInput).should("be.visible").type(cardInfo.name);
  cy.get(elements.cardLastNameInput).type(cardInfo.lastName);
  cy.get(elements.cardNumberInput).type(cardInfo.number);
  cy.get(elements.cardMonthInput).type(cardInfo.month);
  cy.get(elements.cardYearInput).type(cardInfo.year);
  cy.get(elements.cardCVVInput).type(cardInfo.cvv);
}

export default {
  elements,
  fillShippingDetails,
  fillCardDetails,
};
