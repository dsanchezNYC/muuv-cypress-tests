/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { SignUpPage } from "../page-objects/sign-up-page"
import { WorkoutsPage } from "../page-objects/workouts-page"

describe('#/workouts tests', () => {

    const lp = new LoginPage
    const wop = new WorkoutsPage

    describe('Sanity tests', () =>{

    it('Activity Feed header visible', () => {
        lp.loginAsDemoUser()
        wop.activityFeed().should('be.visible')
    })

    it('Route Image visible', () => {
        wop.routeImage().should('be.visible')
    })

    })

})