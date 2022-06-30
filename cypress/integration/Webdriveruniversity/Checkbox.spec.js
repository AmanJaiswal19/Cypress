/// <reference types="cypress" />

describe('day 2', () => {
    it.skip('to test the single single checkbox', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="option-1"]').check()
        cy.get('input[value="option-1"]').check().should('be.checked');
        cy.get('input[value="option-2"]').check().should('be.checked');
    })
})
it.skip('to be test the single checkbox is unchecked', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
    cy.get('input[value="option-3"]').uncheck()
    cy.get('input[value="option-3"]').check().should('not.be.checked');
})
it.skip('to test all the checkbox are checked usuing each', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
    cy.get('input[type="checkbox"]').each((el, index) => {
        cy.wrap(el).check()
    })
})
it.skip('to test all the chechbok are checked by passing the opetions', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
    cy.get('input[type="checkbox"]').check(['Option 1', 'Option 2', 'Option 3', 'Option 4'])
})
it.skip('to test the Redio Button is checked', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
    cy.get('input[value="green"]').check()
    cy.get('input[value="green"]').should('be.checked')
    cy.get('input[value="blue"]').check().should('be.checked')
    cy.get('input[value="green"]').should('not.be.checked')
    cy.get('input[value="yellow"]').check().should('be.checked')
    cy.get('input[value="orange"]').check().should('be.checked')
    cy.get('input[value="purple"]').check().should('be.checked')
})
it('to test that element wich is disable', () => {
    cy.visit('https://www.testingwithtechbrothers99.com/common-elements');
    cy.get('div[class="radio disabled"]').should('have.class', 'radio disabled') // attrr & its value
    cy.get('input[id="optionsRadios4"]').should('have.attr', 'disabled') // only validating if attribute given attribute

    cy.get('div[class="checkbox disabled"]').should('have.class', 'checkbox disabled')
    cy.get('input[value="checkbox-disabled"]').should('have.attr', 'disabled')
})













