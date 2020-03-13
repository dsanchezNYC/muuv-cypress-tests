export class RoutesPage{

    // Details

    workoutHeader(){
        return cy.get('.workout-header > h2')
    }

    workoutDetailsH1(){
        return cy.get('.workout-details > h1')
    }

    workoutDetailsH2(){
        return cy.get('.workout-details > h2')
    }

    workoutDetailsP(){
        return cy.get('p')
    }

    workoutTitle(){
        return cy.get('.route-img-title > h1')
    }

    profilePic(){
        return cy.get('.show-profile-pic')
    }

    distanceLabel(){
        return cy.get('ul > :nth-child(1) > h2')
    }

    distanceValue(){
        return cy.get('ul > :nth-child(1) > h1')
    }

    movingTimeLabel(){
        return cy.get('ul > :nth-child(2) > h2')
    }
    
    movingTimeValue(){
        return cy.get('ul > :nth-child(2) > h1')
    }

    averageSpeedLabel(){
        return cy.get('h3')
    }

    averageSpeedValue(){
        return cy.get('.stats-low > h1')
    }

    // Route Image

    workoutImage(){
        return cy.get('.wrk-route-image')
    }

    // Graph

    graphArea(){
        return cy.get('[x="0"]')
    }

    graph(){
        return cy.get(':nth-child(3) > [height="185"]')
    }

    
}