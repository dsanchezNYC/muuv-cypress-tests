/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"

describe('Login actions', () => {
    
const loginPage = new LoginPage

beforeEach(() => {
    loginPage.navigate()
})

it('Should see login page load correctly', () => {
    loginPage.muuvLogoVisible()
    loginPage.muuvSignUpVisible()
    loginPage.loginFieldExists()
    loginPage.passwordFieldExists()
})

})