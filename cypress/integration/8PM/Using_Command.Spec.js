describe('validate the Contact-US form', () => {

    it('verify the Contact-US form', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.equal('CONTACT US')
        })
        cy.validateContactUs('Aman', 'Jaiswal', 'amanjaiswal591@gmail.com', 'learning js')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.only('verify the contact us form reset functionality', function () {

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.validateContactUs('Aman', 'Jaiswal', 'amanjaiswal591@gmail.com', 'learning js')
        cy.get('input[type="reset"]').click()
        cy.validateContactUs(' ',' ',' ')
    })
})


