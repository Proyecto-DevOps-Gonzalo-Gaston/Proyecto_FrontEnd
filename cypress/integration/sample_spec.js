describe('My First Test', function() {
    it('Visits the app', function() {
      cy.visit('/')
      cy.contains('Welcome')
    })
  })