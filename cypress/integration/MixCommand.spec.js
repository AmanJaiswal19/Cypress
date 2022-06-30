describe('Learn Aotomation', () => {
    it('to verify the button action', () => {
        cy.visit('https://demoqa.com/buttons')

        cy.get('button[id="doubleClickBtn"]').dblclick()
        cy.get('p[id="doubleClickMessage"]').should('be.visible').and('contian', 'You have done a double click')
        cy.get('button[id="rightClickBtn"]').rightclick()
        cy.get('p[id="rightClickMessage"]').should('be.visible').and('contain', 'You have done a right click')
    })


    it.only('To verify the text inputs and text area ', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('input[id="userName"]').clear().type('Aman Jaiswal')
        cy.get('input[id="userEmail"]').type("amanjaiswal591@gmail.com")
        cy.get('textarea[id="currentAddress"]').type('Nagpur')
        cy.get('textarea[id="permanentAddress"]').type('Nagpur')
        cy.get('button[id="submit"]').click()
    })
})