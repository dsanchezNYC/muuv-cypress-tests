/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('Sign Up page smoke tests', () => {

    const loginPage = new LoginPage
    const signUpPage = new SignUpPage

    beforeEach(() => {
        loginPage.navigateToLoginPage()
        loginPage.muuvSignUpVisible()
        loginPage.navigateToSignUp()
    })

    it('Should see Sign Up title and description correctly', () => {
        signUpPage.titleSignUpVisible()
        signUpPage.descriptionSignUpVisible()
    })

    it('Should see Email/New Password headings for login fields', () => {
        signUpPage.emailTextLogin()
        signUpPage.newPasswordTextLogin()
    })

    it('Should see Show/Hide link for password', () => {
        signUpPage.showPasswordLinkVisible()
        signUpPage.clickShowPasswordLink()
        signUpPage.hidePasswordLinkVisible()
    })
})