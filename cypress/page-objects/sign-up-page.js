export class SignUpPage{

    signUpTitle(){
        return cy.get('.signup-form-title')
    }

    signUpDescription(){
        return cy.get('.signup-description')
    }

    emailSignUpFieldText(){
        return cy.get('.signup-form > :nth-child(2)')
    }

    emailSignUpField(){
        return cy.get('.signup-form > [type="text"]')
    }

    passwordSignUpFieldText(){
        return cy.get('.password-show-hide')
    }

    passwordSignUpField(){
        return cy.get('.signup-form > [type="password"]')
    }

    showPasswordLink(){
        return cy.get('.password')
    }

    hidePasswordLink(){
        return cy.get('.text')
    }
    
}