// object --- property & method

// let dateA = new Date
// console.log(dateA.getDate())
// console.log(dateA.getDate() + 2)
// console.log(dateA.getMonth())
// console.log(dateA.getFullYear())

// january --- 0

// let dateToSelect = new Date()
// dateToSelect.setDate(dateToSelect.getDate() + 391)

// let year = dateToSelect.getFullYear()
// let day = dateToSelect.getDate()
// let wordM = dateToSelect.toLocaleString('default', { month: 'long' })

// console.log(year)
// console.log(day)
// console.log(wordM)

describe('verify the datepicker', () => {

    it('verify the calender', () => {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        let dateToSelect = new Date()
        dateToSelect.setDate(dateToSelect.getDate() + 391)

        let year = dateToSelect.getFullYear()
        let day = dateToSelect.getDate()
        let wordM = dateToSelect.toLocaleString('default', { month: 'long' })
        // console.log(year)
        // console.log(day)
        // console.log(wordM)

        function selectMonthAndDate() {
            // year
            cy.get('.datepicker-switch').first().then(el => {
                // january 2023
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthAndDate()

                }
            }).then(() => {
                // month
                cy.get('.datepicker-switch').first().then(el => {
                    // Janaury 2023
                    if (!el.text().includes(wordM)) {
                        cy.get('.next').first().click()
                        selectMonthAndDate()
                    }
                })
            })
        }
        function selectDate() {
            cy.contains('[class="day"]', day).click()
        }
        selectMonthAndDate()
        selectDate()
    })
})





























