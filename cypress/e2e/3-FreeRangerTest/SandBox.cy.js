describe('Home de www.freerangetesters.com', () =>{
    beforeEach(() => {
        cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing/')
    })

    it('checking the button name', () =>{
        cy.wait(3000)
        cy.xpath("//button[contains(.,'generar un ID')]").click();
        //cy.wait(2000)
        cy.xpath("//p[@id='hidden-element']", {timeout: 3000}).should('be.visible');
    })

})