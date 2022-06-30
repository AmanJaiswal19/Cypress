describe('Compare the price from both the websites', () => {

    it('price in flipkart', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('input[type="text"]').type('REDMI Note 10 Pro (Dark Night, 128 GB) (6 GB RAM)')
        cy.get('button[type="submit"]').click()
        
    })
})