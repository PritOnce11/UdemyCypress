import SauceDemoLoginPage from '../../pages/LoginPage.js'
import commons from '../../commons/Commons.js'

const home = new SauceDemoLoginPage
const common = new commons

//VARIABLES
let user
let password
let userLocked
const userMissing = ''

//MENSAJES DE ERROR
let lockedUserMessage
let missingUserMessage
let missingPasswordMessage

describe('Visiting SauceDemo Test', () =>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('credentials').then(({
            users,
        }) =>{
            user = users.standard.username;
            password = users.standard.password;
            userLocked = users.locked.username; 
        })

        cy.fixture('errorMessages').then(({
            messagesError,
        }) =>{
            lockedUserMessage = messagesError.userLock.message;
            missingUserMessage = messagesError.userMissing.message;
            missingPasswordMessage = messagesError.passwordMissing.message; 
        })
    })

    it('user loging', () =>{
        home.login(user, password)
    })

    it('checking the error messages when the user is locked', () =>{
        home.login(userLocked, password)
        home.errorMessages(lockedUserMessage)
    })
    
})