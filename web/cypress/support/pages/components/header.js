class Header{
    goToPreReg() {
        cy.get('nav a[href="pre-cadastro"]')
            .click();
    }

    verifyPreReg(firstname, email) {
        cy.get('.user-name')
            .should('be.visible')
            .and('have.text', 'Olá, ' + firstname)
        cy.get('.user-email')
            .should('be.visible')
            .and('have.text', email)
    }
}

export default new Header()