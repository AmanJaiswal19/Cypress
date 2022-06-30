describe('verify the GET commant API', () => {

    it('Get comment', () => {
        cy.request({
            method: 'Get',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).then(function (response) {
            cy.log(response.body.body)
            expect(response.status).to.eq(200)
            expect(response.body.body).to.includes('laudantium')
        })
    })

    it('Get comment', () => {
        cy.request({
            method: 'GET',
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then(function (response) {
            cy.log(response.body.body)
            expect(response.status).to.eq(200)
            expect(response.body.body).to.includes('laudantium')
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })

    // GET, PUT, POST, DELETE

    it('Get comment', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            cy.log(response)
            expect(response.body.per_page).to.eql(6)
        })
    })

    it.only('Get comment', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            return response
        }).then(function (response) {
            return response.body.data.find(function (el) {
                return el.first_name === 'Michael'
            })
        }).then(function (obj) {
            expect(obj.first_name).to.eq('Michael')
        })
    })
})
