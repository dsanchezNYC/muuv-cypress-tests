/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('Sign Up page tests', () => {

    const loginPage = new LoginPage
    const signUpPage = new SignUpPage

    beforeEach(() => {
        loginPage.visitLoginPage()
        loginPage.signUpButton().should('be.visible').click()
    })

    describe('Smoke tests', () => {

    it('Should see Sign Up title and description correctly', () => {
        signUpPage.signUpTitle().should('be.visible').should('have.text', 'Sign Up')
        signUpPage.signUpDescription().should('be.visible').should('have.text', 'Cyclist? Runner? Join the muuvment today.')
    })

    it('Should see Email/New Password headings and fields', () => {
        signUpPage.emailSignUpFieldText().should('be.visible').should('have.text', 'Email')
        signUpPage.emailSignUpField().should('be.visible').should('be.enabled')
        signUpPage.passwordSignUpFieldText().should('be.visible').should('have.text', 'New PasswordShow')
        signUpPage.passwordSignUpField().should('be.visible').should('be.enabled')
    })

    it('Should see Show/Hide link for password', () => {
        signUpPage.showPasswordLink().should('be.visible').click()
        signUpPage.hidePasswordLink().should('be.visible').should('have.text', 'Hide')
    })

    })
})