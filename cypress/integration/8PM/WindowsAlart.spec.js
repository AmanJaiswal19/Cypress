describe('verify the js alart', () => {

    it('validate the JS Window alart', () => {
        cy.on('window:alert', function (str) {
            expect(str).to.eq('I am an alert box!')
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
    })


    it('validate JS window:confirm OK', () => {
        cy.on('window:confirm', function (str) {
            console.log(str)
            return true
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed OK!")
    })


    it('validate JS window:confirm cancle', function () {
        cy.on('window:confirm', function (str) {
            return false
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed Cancel!")
    })

    // window -- object ==> 3 ypes of alert ---> js alert , confirm , prompt

    it.only('validate JS window:prompt', () => {
        let text = 'Hello'
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (obj) {
            cy.stub(obj, 'prompt').returns(text)
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('have.text', `You entered:${text}`)
    })
})





























