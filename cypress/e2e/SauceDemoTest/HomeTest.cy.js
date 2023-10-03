import SauceDemoHomePage from '../../pages/HomePage.js'
import SauceDemoLoginPage from '../../pages/LoginPage.js'
import commons from '../../commons/Commons.js'

const home = new SauceDemoLoginPage
const principalPage = new SauceDemoHomePage
const common = new commons

//VARIABLES
const user = 'standard_user'
const password = 'secret_sauce'
const sauceLabsBackPack = '//*[@data-test="add-to-cart-sauce-labs-backpack"]'
const cartButton = '.shopping_cart_link'

describe('Visiting SauceDemo Test', () =>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
    })

    it('check the quantity of products', () =>{
        home.login(user, password)
        common.click(sauceLabsBackPack)
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

})