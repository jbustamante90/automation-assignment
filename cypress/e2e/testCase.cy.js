import { checkoutPage, homePage, viewCartPage } from "../pageResources";

describe("Test for validating the checkout workflow", () => {
  before(() => {
    cy.fixture("testData").as("testData");
  });

  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
    cy.visit("/");
  });

  it("validates the checkout", () => {
    cy.get("@testData").then((data) => {
      const shippingInfo = data.shippingInfo;
      const cardInfo = data.cardInfo;

      homePage.addNthItemToCart(data.searchTerm, 1);
      homePage.viewCart();
      viewCartPage.gotoCheckout();
      checkoutPage.fillShippingDetails(shippingInfo);
      checkoutPage.fillCardDetails(cardInfo);
    });
  });
});
