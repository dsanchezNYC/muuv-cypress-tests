export class WorkoutsPage{

activityFeedVisible(){
    cy.get('.workout-feed > h1').should('have.text', 'Activity Feed')
}

}