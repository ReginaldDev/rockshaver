Cypress.Commands.add('iniciarAgendamento', () => {
    cy.get('a[href="/agendamento"]')
        .click()
})

Cypress.Commands.add('escolherProfissional', (profissional) => {
    cy.contains('span', 'Membros da Equipe')
        .should('be.visible')
    
    cy.contains('div', profissional)
        .parent()
        .click()
})

Cypress.Commands.add('selecionarServico', (servico) => {
    cy.contains('span', 'Serviços')
        .should('be.visible')
    
    cy.contains('div', servico)
        .parent()
        .click()
})

Cypress.Commands.add('escolherDiaAgendamento', (dia) => {
    cy.contains('span', 'Dias Disponíveis')
        .should('be.visible')
    
    cy.contains('.dia-semana', dia)
        .click()
})

Cypress.Commands.add('escolherHorarioAgendamento', (hora) => {
    cy.contains('span', 'Horários Disponíveis')
        .should('be.visible')
    
    cy.contains('.hora-opcao', hora)
        .click()
})

Cypress.Commands.add('finalizarAgendamento', () => {
    cy.contains('button', 'Confirmar e reservar')
        .click()
})
