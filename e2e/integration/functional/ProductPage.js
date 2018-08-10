// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />
import els from '../../elements/de';
import { clearProductFromCart } from '../../helper/cart';

describe('functional test product page', () => {
  it('should check for variant  select', () => {
    cy.visit('');

    cy.get(els.productVariantsCategory)
      .scrollIntoView()
      .should('be.visible')
      .click();
    cy.get(els.productsWith2VariantsCategory)
      .should('be.visible')
      .last()
      .click();
    cy.get(els.productWithChild1MotherNameProductGrid)
      .should('be.visible')
      .last()
      .click();
    cy.get(els.variantPickerColor)
      .should('be.visible')
      .click();
    cy.get(els.blackColorVariant)
      .should('be.visible')
      .click();
    cy.get(els.variantPickerShoeSize)
      .should('be.visible')
      .click();
    cy.get(els.size5ShoeSizeVariant)
      .should('be.visible')
      .click();
    cy.wait(1000);
    cy.get('[data-test-id="Color"] span')
      .contains('Black')
      .should('be.visible');
    cy.get('[data-test-id="Shoe size"] span')
      .contains('5')
      .should('be.visible');
    cy.wait(1000);
    cy.get(els.addToCartButton)
      .should('be.visible')
      .click();
    cy.get(els.cartButton += ' div')
      .contains('1');
    clearProductFromCart();
  });

  it('should check for options select', () => {
    cy.visit('');

    cy.get(els.productWithOptionsCategory)
      .scrollIntoView()
      .click();
    cy.get(els.simpleProductWithOptionsNameProductGrid)
      .should('be.visible')
      .click();
    cy.get(els.optionPickerBallColor)
      .should('be.visible')
      .click();
    cy.get(els.redBallColorOption)
      .should('be.visible')
      .click();
    cy.wait(1000);
    cy.get(els.optionPickerGlow)
      .should('be.visible')
      .click();
    cy.get(els.lowGlowOption)
      .should('be.visible')
      .click();
    cy.get('[data-test-id="Ball color"] span')
      .contains('Red Ball')
      .should('be.visible');
    cy.get('[data-test-id="glow"] span')
      .contains('low')
      .should('be.visible');
    cy.wait(1000);
    cy.get(els.addToCartButton)
      .should('be.visible')
      .click();
    cy.get(els.cartButton += ' div')
      .contains('1');
    clearProductFromCart();
  });
});
