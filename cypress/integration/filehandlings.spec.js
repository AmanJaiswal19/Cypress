describe('file handlings in cypress', () => {

    it('TC_01 single file upload using plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        var img = 'zoom.png'
        cy.get('#file-upload').attachFile(img)
        cy.get('')
    })
})