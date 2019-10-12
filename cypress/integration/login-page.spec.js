/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { WorkoutsPage } from "../page-objects/workouts-page"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('Login Page tests', () => {
    
    const loginPage = new LoginPage
    const workoutsPage = new WorkoutsPage
    const signUpPage = new SignUpPage

    beforeEach(() => {
        loginPage.visitLoginPage()
    })

    describe('Smoke tests', () =>{

    it('Should see Muuv logo load correctly', () => {
        loginPage.muuvHeaderLogo().should('be.visible')
    })

    it('Should see Sign Up button load correctly', () => {
        loginPage.signUpButton().should('be.visible')
    })

    it('Should see Login and Password fields correctly', () => {
        loginPage.emailLoginField().should('be.visible').should('be.enabled')
        loginPage.passwordLoginField().should('be.visible').should('be.enabled')
    })

    it('Should see Log In button load correctly', () => {
        loginPage.logInButton().should('be.visible')
    })

    it('Should see Demo Login? load correctly', () => {
        loginPage.demoLoginLink().should('be.visible')
    })

    it('Should see background image correctly', () => {
        loginPage.backgroundImage().should('be.visible')
    })
    
    })

    describe('Functional tests', () =>{

    it('Should see email/password error when no email/password provided', () => {
        loginPage.logInButton().should('be.visible').click()
        loginPage.getEmailPasswordError().should('be.visible')
    })

    it('See successful login for valid credentials', () => {
        loginPage.emailLoginField().type('test@test.com')
    })

    it('Should login via Demo Login', () => {
        loginPage.demoLoginLink().should('be.visible').click()
        workoutsPage.activityFeed().should('have.text', 'Activity Feed')
    })

    // it('Should be able to sign up as a new member', () => {
    //     loginPage.signUpButton().click()
    //     signUpPage.emailLoginField().type('daniel.edw.sanchez@gmail.com')
    //     signUpPage.passwordSignUpField().type('test1234')
    // })



    })

})