///<reference types="cypress" />

describe('verify the funcality of flipkart', () => {
    it('verify the flipkart product', () => {
        cy.visit(' https://www.flipkart.com/')
        cy.get('input[type="text"]').type('iphone{enter}')
        cy.get('._1fQZEK').first().invoke("removeAttr", "target").click()
        cy.get("._30jeq3._16Jk6d").then((el) => {
            cy.log(el.text())
            console.log(el.text())
        })
        cy.get("._2KpZ6l._2U9uOA._3v1-ww").contains("button", "ADD TO CART").realClick();
        cy.get("._23FHuj").last().click()
        cy.wait(1000)
        cy.get("._2-ut7f._1WpvJ7").first().then((el) => {
            cy.log(el.text())
            console.log(el.text());
        })
    })
})

