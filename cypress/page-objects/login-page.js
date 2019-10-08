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

    loginButtonExists(){
        cy.get('.login-submit-button').should('be.visible')
    }

    demoLoginLinkExists(){
        cy.get('.demo-button').should('be.visible')
    }

    backgroundImageVisible(){
        cy.get('.everypage').should('be.visible')    
    }
    

    
    
}