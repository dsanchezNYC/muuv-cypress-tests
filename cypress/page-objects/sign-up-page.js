export class SignUpPage{

    titleSignUpVisible(){
        cy.get('.signup-form-title').should('be.visible')
    }

    descriptionSignUpVisible(){
        cy.get('.signup-description').should('be.visible')
    }

    emailTextLogin(){
        cy.get('.signup-form > :nth-child(2)').should('be.visible')
    }

    newPasswordTextLogin(){
        cy.get('.password-show-hide').should('be.visible')
    }

    showPasswordLinkVisible(){
        cy.get('.password').should('be.visible')
    }

    clickShowPasswordLink(){
        cy.get('.password').click()
    }

    hidePasswordLinkVisible(){
        cy.get('.text').should('be.visible')
    }
    
}