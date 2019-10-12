export class LoginPage {
    
    visitLoginPage(){
        cy.viewport(1440,900)
        cy.visit('https://muuv.herokuapp.com/#/login')        
        cy.clearCookie('session-id')
    }

    muuvHeaderLogo(){
        return cy.get('h1')
    }

    signUpButton(){
        return cy.get('.login-signup')
    }

    emailLoginField(){
        return cy.get('[type="text"]')
    }

    passwordLoginField(){
        return cy.get('[type="password"]')
    }

    logInButton(){
        return cy.get('.login-submit-button')
    }

    demoLoginLink(){
        return cy.get('.demo-button')
    }

    backgroundImage(){
        return cy.get('.everypage')
    }

    getEmailPasswordError(){
        return cy.get('.login-error')
    }
    
}