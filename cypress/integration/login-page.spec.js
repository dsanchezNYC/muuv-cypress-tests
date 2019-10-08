/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"

describe('Login page smoke tests', () => {
    
const loginPage = new LoginPage

beforeEach(() => {
    loginPage.navigate()
})

it('Should see Muuv logo load correctly', () => {
    loginPage.muuvLogoVisible()
})

it('Should see Sign Up button load correctly', () => {
    loginPage.muuvSignUpVisible()
})

it('Should see Login and Password fields correctly', () => {
    loginPage.loginFieldExists()
    loginPage.passwordFieldExists()
})

it('Should see Log In button load correctly', () => {
    loginPage.loginButtonExists()
})

it('Should see Demo Login? load correctly', () => {
    loginPage.demoLoginLinkExists()
})

it('Should see background image correctly', () => {
    loginPage.backgroundImageVisible()
})

})