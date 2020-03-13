/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { WorkoutsPage } from "../page-objects/workouts-page"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('#/login tests', () => {
    
    const lp = new LoginPage
    const wop = new WorkoutsPage
    const sup = new SignUpPage

    describe('Sanity tests', () =>{

    it('Muuv logo visible', () => {
        lp.visitLoginPage()
        lp.muuvHeaderLogo().should('be.visible')
    })

    it('Sign Up button visible', () => {
        lp.signUpButton().should('be.visible')
    })

    it('Login and Password fields visible', () => {
        lp.emailLoginField().should('be.visible').should('be.enabled')
        lp.passwordLoginField().should('be.visible').should('be.enabled')
    })

    it('Log In button visible', () => {
        lp.logInButton().should('be.visible')
    })

    it('Demo Login? link visible', () => {
        lp.demoLoginLink().should('be.visible')
    })

    it('Background image visible', () => {
        lp.backgroundImage().should('be.visible')
    })
    
    })

    describe('Login tests', () =>{

    beforeEach(() => {
        lp.visitLoginPage()
    })

    it('Should see email/password error when no email/password provided', () => {
        lp.logInButton().should('be.visible').click()
        lp.getEmailPasswordError().should('be.visible')
    })

    it('See successful login for valid credentials', () => {
        lp.emailLoginField().type('test@test.com')
    })

    it('Should login via Demo Login', () => {
        lp.demoLoginLink().should('be.visible').click()
        wop.activityFeed().should('have.text', 'Activity Feed')
    })

    })

})