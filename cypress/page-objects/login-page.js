export class LoginPage {
    
    navigate(){
        cy.visit('https://muuv.herokuapp.com/#/login')
    }

    muuvLogoVisible(){
        cy.get('h1').should('be.visible')    
    }

    muuvSignUpVisible(){
        cy.get('.login-signup').should('be.visible')
    }

    loginFieldExists(){
        cy.get('[type="text"]').should('be.enabled')
    }

    passwordFieldExists(){
        cy.get('[type="password"]').should('be.enabled')
    }
    
}