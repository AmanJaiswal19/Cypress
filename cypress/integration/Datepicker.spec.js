describe('verify the date picker functionality', () => {

    it("validate the dataPicker", () => {
        let date = new Date()
        date.setDate(date.getDate() + 365)
        let year = date.getFullYear()
        let month = date.toLocaleDateString('defaulte', { month: 'long' })
        let da = date.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(da)
        cy.visit('http://demo.automationtesting.in/Datepicker.html')
        cy.get('.col-xs-1').click()
        function SelectYearMonth() {
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next ui-corner-all').click()
                    SelectYearMonth()
                }
            }     
        }
    })   
})  




