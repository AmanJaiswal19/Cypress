it('drag and drop using trigger and  data transfer', () => {
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    const dataTransfer = new DataTransfer();
    cy.get('#menu-fried-chicken').trigger('dragstart', { dataTransfer })
    cy.get('#plate-items').trigger('drop', { dataTransfer })
})
it('drag and drop using  drag method directly', () => {
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    cy.get('#menu-ice-cream').drag('#plate-items')
})

//--------------------------------------------------------------------------------------//

it('mouse down , mouse up, mousemove', () => {
    cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
    cy.get('div[id="draggable"]').trigger('mousedown', { which: 1 })
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    cy.get('#droppable').should('have.class', 'ui-widget-header ui-droppable ui-state-highlight')
})

it('drag and drop using  drag method directly', () => {
    cy.visit('https://codenboxautomationlab.com/')
    cy.contains('Contact Us').scrollIntoView()
    cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
    cy.get('footer').scrollIntoView()
})

//-------------------------------------------------------------------------------//

it.only('add to cart and checkout', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('input[type="search"]').last().type('Ca')
    cy.get('h4[class="product-name"]').each((el, index) => {
        if (el.text() == "Cashews - 1 Kg") {
            cy.get('div[class="product-action"] button').eq(index).click()
        }
    }) 
    cy.get('')

})
