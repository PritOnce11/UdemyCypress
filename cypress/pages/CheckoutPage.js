import commons from '../commons/Commons.js'
const common = new commons

class SauceDemoCheckoutPage{

    fillTheFields(name, lastName, postalCode){
        common.type('//*[@data-test="firstName"]', name)
        common.type('//*[@data-test="lastName"]', lastName)
        common.type('//*[@data-test="postalCode"]', postalCode)
    }

}

export default SauceDemoCheckoutPage