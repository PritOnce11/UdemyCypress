describe('Visiting SauceDemo Test', () =>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
    })

    it('add and remove product', () =>{
        cy.wait(3000)
        cy.xpath('//*[@data-test="username"]').type('standard_user')
        cy.xpath('//*[@data-test="password"]').type('secret_sauce')
        cy.xpath('//*[@data-test="login-button"]').click();
        cy.wait(1000)
        cy.xpath('//*[@data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.wait(1000)
        cy.get('.shopping_cart_link').click()
        cy.wait(1000)
        cy.xpath('//*[@data-test="remove-sauce-labs-backpack"]').click()
    })

})