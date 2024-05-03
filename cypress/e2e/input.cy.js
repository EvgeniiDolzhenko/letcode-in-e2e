describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/edit"]').click()
    cy.url().should('include','/edit')
    cy.get('#fullName').type('Full Name')
    .should('have.value','Full Name')
    cy.get('#join').type(', and you?')
    .invoke('prop','value').then((text)=>{
      expect(text).eq('I am good, and you?')
    })
    cy.get('#noEdit').should('have.prop','disabled', true)
    cy.get('#noEdit').invoke('removeAttr','disabled')
    cy.get('#noEdit').should('have.prop','disabled', false)
    .type('We can change attribute')
    cy.get('#dontwrite').should('have.value','This text is readonly')
    .invoke('removeAttr','readonly')
    .clear()
    .type('We also can remove this one')
    cy.get('#getMe').should('have.value','ortonikc')

  })
})