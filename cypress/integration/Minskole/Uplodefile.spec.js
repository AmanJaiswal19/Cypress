describe('verify the uplode file', () => {

    it('Single file uplode', () => {

        let Image = 'Que.jpg'
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(Image)
        cy.get('#submit-button').click()
        cy.url().should('contain', Image)
    })

    it('Multipel file uplode', () => {
        let arr = ['Que.jpg', 'Que.jpg', 'Que.jpg']
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        cy.get('#igUpload1_ibb_fp').attachFile(arr)
        cy.wait(6000)
        cy.get('#igUpload1_ibb').click()
    
    })
    it.only('upload multiple files with plugin', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        // let arr = ['Que.jpg', 'Que.jpg', 'Que.jpg']
        cy.get('#igUpload1_ibb_fp').attachFile(['Que.jpg'
        , 'Que.jpg', 'Que.jpg'])
        cy.get('button[title="Upload"]').click()
        cy.get('span[id="igUpload1_spbtncncl_lbl"]').should('have.text', 'Done')
    })

})