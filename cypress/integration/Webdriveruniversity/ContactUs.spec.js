/// <reference types="cypress" />
var data = ['Aman', 'Jaiswal', 'test@test.com'];

describe('Learn Automation', () => {
    it('test case 1', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click();
        //implicite aasertion-> should
        //explicite -> expect
        cy.url().should('include', 'Contact-Us');
        cy.url().then(url => {
            expect(url).to.equal('http://webdriveruniversity.com/Contact-Us/contactus.html');
        })
    })
    it('tase the application form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[class=feedback-input]').eq(0).type('Aman');
        cy.get('input[class=feedback-input]').eq(1).type('Jaiswal');
        cy.get('input[class=feedback-input]').eq(2).type('amanjaiswal@gamail.com');
        cy.get('textarea[name="message"]').type('I am learning cypress');
        cy.get('input[type=submit]').click();
        cy.get('div[id=contact_reply]>h1').should('Thank You for your Message!');
    })
    it('use of each method', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[class="feedback-input"]').each((element, index) => {
            cy.wrap(element).type(data[index])
        })
    })
})