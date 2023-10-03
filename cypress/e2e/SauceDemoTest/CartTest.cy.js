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
const removeButton = '//*[@data-test="remove-sauce-labs-backpack"]'

describe('Visiting SauceDemo Test', () =>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
    })

    it('add and remove product from cart page', () =>{
        home.login(user, password)
        cy.wait(1000)
        common.click(sauceLabsBackPack)
        cy.wait(1000)
        cy.get(cartButton).click()
        cy.wait(1000)
        common.click(removeButton)
    })

})