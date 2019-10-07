export class LoginPage {
    
    navigate(){
        cy.visit('https://muuv.herokuapp.com/#/login')
    }

    muuvLogoExists(){
        cy.get('h1').should('be.visible')    
    }

    loginFieldExists(){
        cy.get('[type="text"]').should('be.enabled')
    }

    passwordFieldExists(){
        cy.get('[type="password"]').should('be.enabled')
    }
    
}