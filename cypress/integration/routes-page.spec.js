/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { WorkoutsPage } from "../page-objects/workouts-page"
import { RoutesPage } from "../page-objects/routes-page"

describe('#/routes tests', () => {
    
    const lp = new LoginPage
    const wop = new WorkoutsPage
    const rp = new RoutesPage

    // beforeEach(() => {
    //     lp.loginAsDemoUser()
    //     wop.routeImage().click()
    // })

    describe('Sanity tests', () => {

    it('Header visible, correct user', () => {
        lp.loginAsDemoUser()
        wop.routeImage().click()
        rp.workoutHeader().should('be.visible').should('have.text', 'BricePowell - Ride')
    })

    it('Profile Pic visible', () => {
        rp.profilePic().should('be.visible')
    })

    it('Details/notes of ride visible', () => {
        //rp.workoutDetailsH2().should('be.visible').should('have.text','4:15 am on Thursday, February 1st 2018')
        rp.workoutDetailsH1().should('be.visible').should('have.text', 'Morning in Bushwick')
        rp.workoutDetailsP().should('be.visible').should('have.text', '2 Laps, then a coffeed asdasd asd ')
        rp.workoutTitle().should('be.visible').should('have.text', 'Bushwick Walk Around')
    })

    it('Distance and label visible', () => {
      rp.distanceLabel().should('be.visible')
      rp.distanceValue().should('be.visible')  
    })

    it('Moving time and label visible', () =>{
        rp.movingTimeLabel().should('be.visible')
        rp.movingTimeValue().should('be.visible')
    })

    it('Map visible', () => {
        rp.workoutImage().should('be.visible')    
    })

    it('Graph visible', () => {
        rp.graph().should('be.visible')
        rp.graphArea().should('be.visible')
    })
    
    })

})
