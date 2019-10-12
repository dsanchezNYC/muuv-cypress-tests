export class WorkoutsPage{

    muuvLogoHead(){
        return cy.get('.header-link')
    }

    activityFeed(){
        return cy.get('.workout-feed > h1')
    }

    HamburgerMenu(value){
        return cy.get('.logged-in-dropdown').click(value)
    }

}