import commons from '../commons/Commons.js'
const common = new commons

class SauceDemoLoginPage{

    login(user,pass){
        common.type('//*[@data-test="username"]', user)
        common.type('//*[@data-test="password"]', pass)
        cy.xpath('//*[@data-test="login-button"]').click()
    }

    errorMessages(message){
        common.validatTextAppers('//*[@data-test="error"]', message)
    }
}

export default SauceDemoLoginPage