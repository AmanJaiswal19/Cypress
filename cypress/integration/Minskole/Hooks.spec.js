describe('hooks concept in cypress', function () {

    before(function () {
        cy.log('bfore block executed') // 1
    })

    beforeEach(function () {
        cy.log('beforeEach block executed') // 2 // 5
    })

    it('Testcase One', function () {
        console.log('Testcase one executed') // 3
    })

    it('Testcase Two', function () {
        console.log('Testcase Two executed') // 6
    })

    afterEach(function () {
        console.log('afterEach block executed') // 4 // 7
    })

    after(function () {
        console.log('after block executed') // 8
    })
})