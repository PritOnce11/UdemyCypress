import SauceDemoCheckoutPage from '../../pages/CheckoutPage.js'
import SauceDemoLoginPage from '../../pages/LoginPage.js'
import commons from '../../commons/Commons.js'

const home = new SauceDemoLoginPage
const checkout = new SauceDemoCheckoutPage
const common = new commons

//VARIABLES
const user = 'standard_user'
const password = 'secret_sauce'
const sauceLabsBackPack = '//*[@data-test="add-to-cart-sauce-labs-backpack"]'
const cartButton = '.shopping_cart_link' 
const checkoutPage = '//*[@data-test="checkout"]'
const name = 'Prit'
const lastName = 'Once'
const postalCode = '07003'
const checkoutLabel = '.cart_item'

describe('Visiting SauceDemo Test', () =>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
    })

    it('add and remove product', () =>{
        home.login(user, password)
        common.click(sauceLabsBackPack)
        cy.get(cartButton).click()
        common.click(checkoutPage)
        checkout.fillTheFields(name, lastName, postalCode)
        common.click('//*[@data-test="continue"]')
        common.click('//*[@data-test="finish"]')
    })

    it('check if the product appers on checkout page', () =>{
        home.login(user, password)
        common.click(sauceLabsBackPack)
        cy.get(cartButton).click()
        common.click(checkoutPage)
        checkout.fillTheFields(name, lastName, postalCode)
        common.click('//*[@data-test="continue"]')
        cy.get(checkoutLabel).should('contain', 'Backpack')
    })
})