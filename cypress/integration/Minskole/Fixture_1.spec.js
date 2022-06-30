describe('sing up from usnig fixture 1st way', function () {
    // use for global
    before(() => {
        cy.fixture("user").then((data) => {
            this.data = data
        })
    })

    it('verify the functionality for sign - up form with fixture', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        // cy.log(this.data.firstName)
        // cy.log(this.data)
        // this.data['firstName'] = "Sakshi"
        // cy.log(this.data)

        cy.get('input[name="first_name"]').type(this.data.firstName)
        cy.get('input[name="last_name"]').type(this.data.lastName)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[name="message"]').type(this.data.comments)
        cy.get('input[type="submit"]').click()
    })

    it('verify the functionality for sign - up form fixture -2', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[type="submit"]').click()
        })
    })

    it('verify the functionality for sign - up form reset button', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[type="reset"]').click()
            cy.get('input[name="first_name"]').should('have.text', '')
        })
    })

    it('verify the functionality for sign - up form update data', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)
            data.email = "amanjaiswal"
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[type="submit"]').click()
            cy.get('body').should('contain', 'Error')
        })
    })

    it('verify the functionality for sign - up form update data', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)
            data.firstName = "123"
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[type="submit"]').click()
        })
    })

    it('verify the functionality for sign - up form update data', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)
            data.lastName = "***"
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[type="submit"]').click()
        })
    })

    it.only('verify the contact US image', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').contains('CONTACT US')
    })
})











