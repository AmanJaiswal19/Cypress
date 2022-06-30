function validateTables(id, expected) {
    let sum = 0
    cy.get(`#t0${id}`).find('tr').each(function (el, index) {
        if (index != 0) {
            sum = sum + Number(el.find('td').last().text())
        }
    }).then(function () {
        cy.log(sum)
        expect(sum).to.equal(expected)
    })
}

describe('verify the sume of table value', () => {

    it('verify the total value of table', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        it('validate table', function () {
            validateTables(1, 159)
            validateTables(2, 163)
        })
    })
})

describe('verify the sume of table value', () => {

    it('verify the total value of table', () => {
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.find('td').last().text())
            }
        }).then(function () {
            cy.log(sum)
            expect(sum).to.equal(159)
        })
    })

    it('verify the total value', () => {
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tr').each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.find('td').last().text())
            }
        }).then(function () {
            cy.log(sum)
            expect(sum).to.equal(163)
        })
    })
})