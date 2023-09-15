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
      homePage.getItemPrice(1).then((price) => {
        homePage.viewCart();
        cy.get(viewCartPage.elements.closeAlertButton)
          .should("be.visible")
          .click();
        viewCartPage.getItemPrice().should("eq", price);
      });
      viewCartPage.gotoCheckout();
      checkoutPage.fillShippingDetails(shippingInfo);
      checkoutPage.fillCardDetails(cardInfo);
    });
  });
});
