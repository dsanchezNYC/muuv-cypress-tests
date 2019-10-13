export class RoutesPage{

    workoutHeader(){
        return cy.get('.workout-header > h2')
    }

    workoutDetailsLargeText(){
        return cy.get('.workout-details > h2')
    }

    workoutDetailsSmallText(){
        return cy.get('.workout-details > h1')
    }

    workoutDetailsNotes(){
        return cy.get('p')
    }
    
}