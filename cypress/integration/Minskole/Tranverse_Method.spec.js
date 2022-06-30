// <h1 id = "one" class = "two" name = "nm"> HeadingOne </h1>

describe('tranverse method in javscript', () => {

    it('To get a DOM element at a specific index, use the .eq() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').should('have.length', 12)
        cy.get('th').eq(0).should('have.text', 'Firstname')
    })

    it('To get the first DOM element within elements, use the .first() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').first().should('have.text', 'Firstname')
    })

    it('To get the last DOM element within elements, use the .last() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').last().should('have.text', '3')
    })

    it('To get children of DOM elements, use the .children() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class = "breadcrumb traversal-breadcrumb"]').children().should('have.length', '3')
    })

    it('To get children of DOM elements, use the .children() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('tr[class="bg-primary"]').children().should('have.length', '3')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next().should('have.text', 'Espresso')
        cy.get('#milk').next().should('have.attr', "id", 'espresso')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text', 'Tea')
        cy.get('#milk').prev().should('have.attr', 'id', 'tea')
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').nextAll().should('have.length', '2')
        cy.get('#milk').nextAll().first('have.text', 'Espresso')
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prevAll().should('have.length', '2')
    })

    it('To get DOM elements that match a specific selector, use the .filter() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', 'Warning')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').siblings().should('have.length', '4')
    })
})

//----------------------------------------------------------------------------------------------------------//


describe('verify tranverse method', () => {

    it('To get a DOM element at a specific index, use the .eq() command.', function () {

        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().as('navElement')
        // cy.get('.nav-pills').children().eq(1).should('contain', 'Apparel & accessories')
        // cy.get('.nav-pills').children().first().should('contain', 'Home')
        cy.get('@navElement').first().should('contain', 'Home')
        cy.get('@navElement').eq(1).should('contain', 'Apparel & accessories')
    })

    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().first().should('contain', 'Home')
    })

    it('To get the first DOM element within elements, use the .last() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().last().should('contain', 'Book')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().should('contain', 'Makeup')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().next().should('contain', 'Skincare')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().should('contain', 'Makeup')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().prev().should('contain', 'Shoes')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().siblings().should('have.length', 7)
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().find('a').should('have.length', 37)
        cy.get('.nav-pills').children().find('a').filter('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').should('contain', 'Skincare')
    })

    it('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer').children().find('a').should('have.length', 7)
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer').children().find('a').not('a[href = "https://automationteststore.com/index.php?rt=content/content&content_id=2"]').should('have.length', 6)
    })

    it('To get parent DOM element of elements, use the .parent() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href = "https://automationteststore.com/index.php?rt=content/content&content_id=2"]').parent().should('have.class', 'dropdown')
    })

    it('To get parents DOM element of elements, use the .parents() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href = "https://automationteststore.com/index.php?rt=content/content&content_id=2"]').parents().should('match', 'section')
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').first().nextUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(4)').should('have.length', 2)
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').last().prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').should('have.length', 2)
    })
})

//----------------------------------------------------------------------------------------------------//







































































































