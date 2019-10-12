/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { SignUpPage } from "../page-objects/sign-up-page"
import { WorkoutsPage } from "../page-objects/workouts-page"

describe('#/workouts page tests', () => {

    const lp = new LoginPage
    const wop = new WorkoutsPage

    beforeEach(() => {
        lp.visitLoginPage()
        lp.demoLoginLink().click()
    })

    it('Should see Activity Feed header', () => {
        wop.activityFeed().should('be.visible')
    })

})