describe('verify the IFRAME', () => {

    it('Verify the iframe with jquery', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        // cy.get('a[href="products.html"]').should('be.visible')
        cy.get('#frame').then(function ($iframe) {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframebody')
            cy.get('@iframebody').find('a[href="products.html"]').should('be.visible')
        })
    })

    it.only('verify iframe with javascript', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href="products.html"]').should('be.visible')
        cy.get('#frame').then(function (iframe) {
            let body = iframe['0'].contentDocument.body
            cy.wrap(body).as('iframebody')
            cy.get('@iframebody').find('a[href="products.html"]').should('be.visible')
        })
    })
})