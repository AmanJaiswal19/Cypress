describe('verify the contact us form along with navigation', () => {

    it('verify the contact-us form', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.equal('CONTACT US')
        })
        cy.get('input[name="first_name"]').type('Aman')
        cy.get('input[name="last_name"]').type('Jaiswal')
        cy.get('input[name="email"]').type('abc@gamil.com')
        cy.get('textarea[name="message"]').type('I am happy to see you')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('verify the contact-us form reset', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.equal('CONTACT US')
        })
        cy.get('input[name="first_name"]').type('Aman')
        cy.get('input[name="last_name"]').type('Jaiswal')
        cy.get('input[name="email"]').type('abc@gamil.com')
        cy.get('textarea[name="message"]').type('I am happy to see you')
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text', '')
        cy.get('input[name="last_name"]').should('have.text', '')
        cy.get('input[name="email"]').should('have.text', '')
        cy.get('textarea[name="message"]').should('have.text', '')
    })

    it('verify the contact-us form invalid mail', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.equal('CONTACT US')
        })
        cy.get('input[name="first_name"]').type('Aman')
        cy.get('input[name="last_name"]').type('Jaiswal')
        cy.get('input[name="email"]').type('abcgamil.com')
        cy.get('textarea[name="message"]').type('I am happy to see you')
        cy.get('input[type="submit"]').click()
        cy.get('html').should('contain', 'Invalid')
    })

    it('verify the contact-us form invalid details', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function (str) {
            expect(str).to.equal('CONTACT US')
        })
        cy.get('input[name="first_name"]').type('Aman')
        cy.get('input[name="last_name"]').type('Jaiswal')
        cy.get('input[name="email"]').type('abc@gamil.com')
        cy.get('input[type="submit"]').click()
        cy.get('html').should('contain', 'all')
    })
})