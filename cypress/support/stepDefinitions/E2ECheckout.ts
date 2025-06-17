import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('I open the marketplace staging site', () => {
    cy.visit('/');
})

Given('I open the login page', () => {
    cy.visit('/login');
})

Given('I select login using email', () => {
    cy.get('#page-login__tabs-email').click();
})

Given('I enter my valid email', () => {
    cy.get('[id="page-login__tabs-email__input-email"]').type(Cypress.env('email'));
})

Given('I enter the correct password', () => {
    cy.get('[id="page-login__tabs-email__input-password"]').type(Cypress.env('password'));
})

Given('I click login button', () => {
    cy.get('[id="page-login__button-login"]').click();
})

Then('I should be logged in successfully', () => {
    cy.get('[id="search-all-product"]').should('be.visible');
})

When('I search for {string}', (s: string) => {
    cy.get('[id="search-all-product"]').eq(0).click().then(() => {
        cy.get('input[placeholder="Produk atau konten lainnya"]').type(s + '{enter}');
        cy.wait(2000);
        cy.contains('Fitclair Collagen Drink').should('be.visible');
    })
})

When('I select the product and add it to the cart', () => {
    cy.wait(2000);
    cy.intercept('POST', '**/cart').as('addToCart');
    cy.contains('button', 'Keranjang').click();
    cy.wait('@addToCart').its('response.statusCode').should('eq', 200);
})

Then('the cart should show the product with correct details', () => {
    cy.get('.HeaderQbee_total-cart__Acy0A')
    .should('be.visible')
    .click(); 
    cy.contains('.style_product-name-container__njQY7', 'Fitclair Collagen Drink')
    .should('be.visible'); 
})

When('I proceed to checkout', () => {
    cy.contains('button', 'Beli sekarang').click();
})

When('I choose the delivery option', () => {
    cy.wait(3000);
    // Click Pilih Layanan Pengiriman
    cy.get('.styles_pickDelivery-upper__V_Y4r').click();
    cy.contains('Reguler').click();
    cy.contains('JNT').click();
})

Then('I clear cart', () => {
    cy.get('#menu-button-19')
  .should('be.visible')
  .click();
  cy.contains('button', 'Hapus pesanan').should('be.visible').click();
})