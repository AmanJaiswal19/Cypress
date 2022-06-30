it('to test the dropdown which is select', () => {
    cy.visit('https://www.testingwithtechbrothers99.com/common-elements');
    // first way //
    cy.get('select[class="form-control"]')
        .first()
        .select('Option1')
        .should('have.value', '1')
    // second way //
    cy.get('select[class="form-control"]')
        .first()
        .select('1')
        .should('have.contain', 'option 1')
    cy.get('select[class="form-control"]').first().find('option').eq(1).then((el, i) => {
        var elText = el.text()
        cy.log(elText)
    })
})
it('to test dynamic dropdown', () => {
    cy.visit('https://paytm.com/train-tickets')
    cy.get('[data-reactid="164"]> ._2WNb>.fl-input-container>#text-box').clear().type('del')
    cy.get('')
})









