describe('Home de www.freerangetesters.com', () =>{
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () =>{
        cy.wait(6000)
        cy.title().should('include', 'Free Range Testers')
    })

})