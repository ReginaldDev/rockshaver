describe('Agendamento', () => {
    beforeEach(() => {
        const user = {
            nome: 'Bruno Teste',
            email: 'brunoteste@gmail.com'
        }

        cy.startPreRegistration(user)
        cy.verifyPreRegistered(user)
    })

    it('Deve fazer um novo agendamento', () => {

        cy.dropCollection('agendamentos', { failSilently: 'true' })
            .then(result => {
                cy.log(result);
            });

        //Clicando no botão de agendamento
        cy.get('a[href="/agendamento"]')
            .click()
        //CHECKPOINT   
        cy.contains('span', 'Membros da Equipe')
            .should('be.visible')

        //Escolhendo o profissional
        cy.contains('div', 'Tina')
            .parent()
            .click()
        //CHECPOINT    
        cy.contains('span', 'Serviços')
            .should('be.visible')
        //Escolhendo o serviço e a data/horário

        //serviço
        cy.contains('div', 'Combo')
            .parent()
            .click()

        //CHECKPOINT
        cy.contains('span', 'Dias Disponíveis')
            .should('be.visible')
        cy.contains('span', 'Horários Disponíveis')
            .should('be.visible')

        //Data
        cy.contains('.dia-semana', '31')
            .click()
        cy.contains('.hora-opcao', '15:00')
            .click()
        cy.contains('button', 'Confirmar e reservar')
            .click()

        //CHECKPOINT
        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Tudo certo por aqui! Seu horário está confirmado.')

    })
})