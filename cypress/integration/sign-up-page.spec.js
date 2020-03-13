/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('#/signup tests', () => {

    const lp = new LoginPage
    const sup = new SignUpPage

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

})