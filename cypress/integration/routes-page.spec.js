/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { WorkoutsPage } from "../page-objects/workouts-page"
import { RoutesPage } from "../page-objects/routes-page"

describe('#/routes tests', () => {
    
    const lp = new LoginPage
    const wop = new WorkoutsPage
    const rp = new RoutesPage

    beforeEach(() => {
        lp.loginAsDemoUser()
        wop.routeImage().click()
    })

    describe('Smoke tests', () => {

    it('Should see Workout Header', () => {
        rp.workoutHeader().should('be.visible').should('have.text', 'BricePowell - Ride')
    })

    it('Should see details of ride', () => {
        rp.workoutDetailsLargeText().should('be.visible').should('have.text','4:15 am on Thursday, February 1st 2018')
        rp.workoutDetailsSmallText().should('be.visible').should('have.text', 'Morning in Bushwick')
        rp.workoutDetailsNotes().should('be.visible').should('have.text', '2 Laps, then a coffeed asdasd asd ')
    })



    
    })

})
