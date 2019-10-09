export class LoginPage {
    
    navigateToLoginPage(){
        cy.visit('https://muuv.herokuapp.com/#/login')
    }

    muuvLogoVisible(){
        cy.get('h1').should('be.visible')    
    }

    muuvSignUpVisible(){
        cy.get('.login-signup').should('be.visible')
    }

    navigateToSignUp(){
        //cy.get('.login-signup').should('be.visible')
        cy.get('.login-signup').click()
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

    loginToMuuvDemoLogin(){
        cy.get('.demo-button').click()
    }

    backgroundImageVisible(){
        cy.get('.everypage').should('be.visible')    
    }
    
}