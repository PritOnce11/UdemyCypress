import SauceDemoLoginPage from '../../pages/LoginPage.cy.js'
import commons from '../../commons/Commons.js'

const home = new SauceDemoLoginPage
const common = new commons

//VARIABLES
const user = 'standard_user'
const password = 'secret_sauce'
const userLocked = 'locked_out_user'
const userMissing = ''

//MENSAJES DE ERROR
const lockedUserMessage = 'user has been locked'
const missingUserMessage = 'required'

describe('Visiting SauceDemo Test', () =>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
    })

    it('user loging', () =>{
        home.login(user, password)
    })

    it('checking the error messages when the user is locked', () =>{
        home.login(userLocked, password)
        home.errorMessages(lockedUserMessage)
    })

    //it('checking the error messages when the user is missing', () =>{
    //    home.login(userMissing, password)
    //    home.errorMessages(missingUserMessage)
    //})


    
})