export class LoginPage {
    
    navigate(){
        cy.visit('https://muuv.herokuapp.com/#/login')
    }

    loginFieldExists(){
        cy.get('[type="text"]').should('be.enabled')
    }

    passwordFieldExists(){
        cy.get('[type="password"]').should('be.enabled')
    }
    
}