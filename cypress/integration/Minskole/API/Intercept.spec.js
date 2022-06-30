describe('verify the functionality for intercept', () => {

    it('verify the functionality GET comment', () => {

        cy.intercept({
            method: 'GET',
            url: ' https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium')
    })

    it('verify the functionality for GET comment', () => {

        cy.intercept({
            method: 'GET',
            url: ' https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn').click()
        cy.wait('@getComment').then(function (res) {
            console.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.body.id).to.eq(1)
            cy.get('.network-comment').should('contain', 'laudantium')
        })
    })

    it.only('verift the funtionality for POST comment', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains(/^Post Comment$/).click()
        cy.wait('@postComment').then(function (res) {
            console.log(res)
            expect(res.response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('be.visible').and('have.text', 'POST successful!')
        })
    })
})

//-----------------------------------------------------------------------------------------------







