/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"

describe('Login actions', () => {
    
const loginPage = new LoginPage

it('Should see login page', () => {
    loginPage.navigate()
    loginPage.loginFieldExists()
    loginPage.passwordFieldExists()
})

})