describe('verify the functionality of fixture 4th way', () => {

    // object
    let info = {
        "firstName": "Aman",
        "lastName": "Jaiswal",
        "email": "amanjaiswal40yahoo.in",
        "comments": "I am new to js"
    }
    let info2 = {
        "firstName": "Sakshi",
        "lastName": "Jaiswal",
        "email": "sakshijaiswal@gmai.com",
        "comments": "I am new in codeing"
    }

    it('verify the functionality of fixture', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.comments)
        cy.get('input[value ="SUBMIT"]').click()
    })
})

 