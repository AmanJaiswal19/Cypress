describe('verify tranverse method', () => {

    it('.chidren() command', function () {

        cy.visit('https://serviceon.com.au/')
        cy.get('ul[id="menu-1-4f0b16d6"]').children().should('have.length', 5)
    })

    it('.first() command', function () {

        cy.visit('https://serviceon.com.au/')
        cy.get('ul[id="menu-1-4f0b16d6"]').first().children().should('contain', 'Home')
    })

    it('.last() command', function () {

        cy.visit('https://serviceon.com.au/')
        cy.get('ul[id="menu-1-4f0b16d6"]').last().children().should('contain', 'Contact us')
    })

    it('.next() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').eq(0).next().should('have.contain', 'Appliance installations')
    })

    it('.prev() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').eq(2).prev().should('have.text', 'Appliance installations')
    })

    it('.nextAll() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').eq(0).nextAll().should('have.length', 16)
    })

    it('.prevAll() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').eq(16).prevAll().should('have.length', 16)
    })

    it('.filter() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').eq(2).filter('li').should('have.text', 'Asbestos')
    })

    it('.siblings() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').siblings().should('have.length', 17)
    })

    it('.not() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').not().eq(3).should("have.text", 'Awnings')
    })

    it('.parent() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).parent().should('have.attr', 'class')
    })

    it('.parent() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).parents().should('have.attr', 'class')
    })

    it('.nextUntil() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').nextUntil().eq(4).should('have.text', 'Brick Layers')
    })

    it('.prevUntil() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).find('li').eq(5).prevUntil().should('have.length', 5)
    })

    it('.closest() command', function () {
        cy.visit('https://serviceon.com.au/categories/')
        cy.get('div [class="elementor-text-editor elementor-clearfix"]').eq(0).closest('div').should('have.attr', 'class')
    })

    it('.parentsUntil() command', function () {
        cy.visit('https://serviceon.com.au/')
        cy.get('ul[id="menu-1-4f0b16d6"]').parentsUntil('div[class="elementor-widget-container"]').should('have.length', 1)
    })
})

//----------------------------------------------------------------------------------------------------//

describe('verify tranverse method', () => {

    it('.eq() command.', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu-item-has-children').eq(5).should('contain', 'Visa')
    })

    it('.first() command.', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().should('contain', 'Group')
    })

    it('.last() command.', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().last().should('have.attr', 'class')
    })

    it('.next() command.', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().next().should('contain', 'Speciality')
    })

    it('.prev() command.', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(2).prev().should('contain', 'Speciality')
    })

    it('.siblings() command.', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(2).siblings().should('have.length', 10)
    })

    it.only('.filter() command.', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().filter('li[id="tailor-made-holidays"]').should('contain', 'Tailormade')
    })
})











