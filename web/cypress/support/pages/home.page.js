class HomePage {
    go() {
        cy.visit("/");
    }
}

export default new HomePage()