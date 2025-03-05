Cypress.Commands.add('startPreRegistration', (user) => {
    cy.visit("/");

    cy.get('nav a[href="pre-cadastro"]')
        .click();

    cy.get("form h2")
        .should("be.visible")
        .and("have.text", "Seus dados");

    cy.get('input[name="fullname"]').as('nome')
    cy.get('input[name="email"]').as('email')

    if (user?.nome) {
        cy.get('@nome').type(user.nome);
    }

    if (user?.email) {
        cy.get('@email').type(user.email);
    }

    cy.contains('button[type="submit"]', "Continuar")
        .click();
})

Cypress.Commands.add('verifyPreRegistered', (user) => {
    cy.get('.usuario-nome')
        .should('be.visible')
        .and('have.text', 'Olá, ' + user.nome.split(' ')[0])

    cy.get('.usuario-email')
        .should('be.visible')
        .and('have.text', user.email)

    cy.window().then((win)=>{
        const keyUser = win.localStorage.getItem('usuario')
        expect(keyUser).to.eql(JSON.stringify(user))
    })
})

Cypress.Commands.add('preCadastroLS', (user)=>{
    cy.window().then((win)=>{
        win.localStorage.setItem('usuario', JSON.stringify(user) )

        cy.visit('/')
        cy.contains(user.email)
    })
})

Cypress.Commands.add('alertHave', (fieldname, text) => {
    cy.contains('label', fieldname)
        .parent()
        .find('.alert-msg')
        .should('be.visible')
        .and('have.text', text)
})