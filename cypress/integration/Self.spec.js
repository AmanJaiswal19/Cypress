describe('verify the functionality of app', () => {

    it('verify the total amount', () => {

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').click().type('Apple MacBook Pro 13-inch ')
        cy.get('button[type="submit"]').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').clear().type('2')
        cy.get('#add-to-cart-button-4').click()
        cy.get('#topcartlink>a>span.cart-label').click()
        cy.get('.product-unit-price').should('have.text', '$1,800.00')
    })
})

//-------------------------------------------------------------------------------------//

describe('verify the functionality of sec app', () => {

    it.only('verify all the functionality', () => {

        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.url().should('include', 'newtours')
        cy.get('input[name="userName"]').type('Admin')
        cy.get('input[name="password"]').type('Admin@123')
        cy.get('input[type="submit"]').click()
        cy.get('h3').should('have.text', 'Login Successfully')

        cy.get('a[href="reservation.php"]').eq(0).click()
        cy.get('input[value="roundtrip"]').should('be.checked')
        cy.get('input[value="oneway"]').should('not.be.checked')
        cy.get('select[name="passCount"]').select('2').should('have.value', '2')
        cy.get('select[name="fromPort"]').select('London').should('contain.text','London')
        cy.get('select[name="fromMonth"]').select('5').should('contain.text','May')
        cy.get('select[name="fromDay"]').select('29').should('contain.text','29')
        cy.get('')

    })
})














