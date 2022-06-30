// TS_01 --- Validate the login functionality

// TC_01 --- check login with valid credentials
// TC_02 --- check login with invalid credentials

describe('Validate the login functionality', function () {

    it('check login with valid credentials', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type("Admin")
        cy.get('input[name="txtPassword"]').type("admin123")
        cy.get('input[type="submit"]').click()
        cy.get('#menu_dashboard_index').should('be.visible')
    })
    it('check login with invalid credentials', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type("Admin")
        cy.get('input[name="txtPassword"]').type("admin012")
        cy.get('input[type="submit"]').click()
        cy.get('span[id="spanMessage"]').should('have.text', "Invalid credentials")
    })
})


// understanding part-1 //

// describe('validate  the login functionality',()=>{

// })

// let person = {
//     firstName: 'Aman',
//     age: 19,
//     display: function () {
//         console.log('hello')
//     }
// }
// person.firstName
// person.display()


// understanding part-2 //

// css --- selector
// <h1 class = "one" id="two" name ="nm">Heading<h1>

// tagName //
// cy.get('h1')

// class //
// cy.get('.one')

// id //    
// cy.get('#two')

// common formula //
// h1[name = "nm"]

// text //
// cy.contains('Heading')








