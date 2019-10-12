/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { WorkoutsPage } from "../page-objects/workouts-page"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('#/login tests', () => {
    
    const lp = new LoginPage
    const wop = new WorkoutsPage
    const sup = new SignUpPage

    beforeEach(() => {
        lp.visitLoginPage()
    })

    describe('Smoke tests', () =>{

    it('Should see Muuv logo load correctly', () => {
        lp.muuvHeaderLogo().should('be.visible')
    })

    it('Should see Sign Up button load correctly', () => {
        lp.signUpButton().should('be.visible')
    })

    it('Should see Login and Password fields correctly', () => {
        lp.emailLoginField().should('be.visible').should('be.enabled')
        lp.passwordLoginField().should('be.visible').should('be.enabled')
    })

    it('Should see Log In button load correctly', () => {
        lp.logInButton().should('be.visible')
    })

    it('Should see Demo Login? load correctly', () => {
        lp.demoLoginLink().should('be.visible')
    })

    it('Should see background image correctly', () => {
        lp.backgroundImage().should('be.visible')
    })
    
    })

    describe('Functional tests', () =>{

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