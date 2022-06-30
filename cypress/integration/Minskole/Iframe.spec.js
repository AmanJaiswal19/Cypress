describe('verify the function of iframe', () => {

    it('verify the iframe with jqery', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        // cy.get('#mce_0').type('hii')
        cy.get('#mce_0_ifr').then((el) => {
            cy.wrap(el.contents().find('body')).as('iframebody')
            cy.get('@iframebody').should('have.attr', 'data-id')
            cy.get('@iframebody').find('p').type('hii')
        }
        )
    })

    it('verify the iframe with javascript', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then((el) => {
            cy.wrap((el['0'].contentDocument.body)).as('iframebody')
            cy.get('@iframebody').should('have.attr', 'data-id')
            cy.get('@iframebody').find('p').type('hii')
        }
        )
    })

    it('verify the iframe with jquery', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        // cy.contains('Home')
        cy.get('#frame').then((el) => {
            cy.wrap(el.contents().find('body')).as('iframebody')
            cy.get('@iframebody').find('.active').find('a').should('have.text', 'Home')
        }
        )
    })

    it.only('verify the iframe with javascript', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el) => {
            cy.get(el['0'].containsDocument.body).as('iframebody')
            cy.get('@iframebody').find('.active').find('a').should('have.text', 'Body')
        })
    })
})














