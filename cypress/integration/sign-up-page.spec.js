/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { SignUpPage } from "../page-objects/sign-up-page"
import { WorkoutsPage } from "../page-objects/workouts-page"

describe('#/signup tests', () => {

    const lp = new LoginPage
    const sup = new SignUpPage
    const wop = new WorkoutsPage

    const uuid = () => Cypress._.random(0, 1e6)

    describe('Sanity tests', () => {

        it('Sign Up title and description visible', () => {
            lp.visitLoginPage()
            lp.signUpButton().should('be.visible').click()
            sup.signUpTitle().should('be.visible').should('have.text', 'Sign Up')
            sup.signUpDescription().should('be.visible').should('have.text', 'Cyclist? Runner? Join the muuvment today.')
        })

        it('Email/New Password labels and fields visible', () => {
            sup.emailSignUpFieldText().should('be.visible').should('have.text', 'Email')
            sup.emailSignUpField().should('be.visible').should('be.enabled')
            sup.passwordSignUpFieldText().should('be.visible').should('have.text', 'New PasswordShow')
            sup.passwordSignUpField().should('be.visible').should('be.enabled')
        })

        it('Show/Hide link for password masking visible', () => {
            sup.showPasswordLink().should('be.visible').click()
            sup.hidePasswordLink().should('be.visible').should('have.text', 'Hide')
        })

    })

    describe('Functional tests', () => {

        beforeEach(() => {
            lp.visitLoginPage()
            lp.signUpButton().should('be.visible').click()
        })

        it('Error when no email/password provided', () => {
            sup.emailSignUpField().type('test')
            sup.passwordSignUpField().type('test')
            sup.signUpButton().click()
            sup.emailInvalidError().should('be.visible')
            sup.passwordInvalidError().should('be.visible')
        }) 
    
        it('Successful Sign Up for valid email/password', () => {
            const id = uuid()
            sup.emailSignUpField().type('test'+ id + '@test.com')
            sup.passwordSignUpField().type('password123')
            sup.signUpButton().click()           
            wop.activityFeed().should('be.visible') 
        }) 

        afterEach(() => {
            cy.clearCookies() 
        })

    })

})