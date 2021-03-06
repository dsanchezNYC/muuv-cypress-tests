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
        // return cy.get('.signup-form > [type="text"]')
        return cy.get('.signup-form > :nth-child(3)')
    }

    passwordSignUpFieldText(){
        return cy.get('.password-show-hide')
    }

    passwordSignUpField(){
        //return cy.get('.signup-form > [type="password"]')
        return cy.get('.signup-form > :nth-child(6)')
s
    }

    signUpButton(){
        return cy.get('.signup-submit-button')
    }

    // Hide / Show Password

    showPasswordLink(){
        return cy.get('.password')
    }

    hidePasswordLink(){
        return cy.get('.text')
    }

    // Error Locators

    emailInvalidError(){
        return cy.get('.email-error')
    }
    
    passwordInvalidError(){
        return cy.get('.password-error')
    }
}