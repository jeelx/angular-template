describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(false).to.equal(false)
    })
  
    it('successfully loads', () => {
      cy.visit('http://localhost:4200') // change URL to match your dev URL
      cy.get('div').should('contain', 'test')
    })
})