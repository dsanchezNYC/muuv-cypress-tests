export class LoginPage {
    
    visitLoginPage(){
        cy.viewport(1440,900)
        cy.clearCookies()
        cy.visit('/login')        
    }

    loginAsDemoUser(){
        cy.viewport(1440,900)
        cy.clearCookies()
        cy.visit('/login')        
        cy.get('.demo-button', {timeout: 3000}).click()
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