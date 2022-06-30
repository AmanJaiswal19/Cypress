describe('verify the functionality for table', () => {

    // cypress command are async
    // cypress execution sync : interally promises resolved
    // javascript jquery sync nature will break
    // .then() manuall resolve, to maintain the sync order

    it('verify the functionality for login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')
    })

    it('verify the functionality for login-2 cutmosised cypress command', () => {

        cy.login('Admin', 'admin123')
    })

    it.only('verify the sum of values of table cutmosised cypress command', () => {

        cy.validateTable(1, 159)
        cy.validateTable(2, 163)

    })
})

