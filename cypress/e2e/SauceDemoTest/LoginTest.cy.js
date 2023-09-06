describe('Visiting SauceDemo Test', () =>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
    })

    it('user loging', () =>{
        cy.wait(3000)
        cy.xpath('//*[@data-test="username"]').type('standard_user')
        cy.xpath('//*[@data-test="password"]').type('secret_sauce')
        cy.xpath('//*[@data-test="login-button"]').click();
    })

})