import calendario from '../fixtures/calendario.json'
import agendamentos from '../fixtures/agendamentos.json'
describe('Agendamento', () => {
    
    beforeEach(function() {
        cy.fixture('agendamentos').then((agendamentos) => {
            this.agendamentos = agendamentos
        })
    })

    it('Deve fazer um novo agendamento', () => {
  
        const agendamento = agendamentos.sucesso

        cy.dropCollection('agendamentos', { failSilently: 'true' })
            .then(result => {
                cy.log(result);
        });

        cy.intercept('GET', 'http://localhost:3333/api/calendario', {
           statusCode: 200,
           body: calendario
        }).as('getCalendario')
        
        
        cy.startPreRegistration(agendamento.usuario)
        cy.verifyPreRegistered(agendamento.usuario)

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
        //CHECKPOINT    
        cy.contains('span', 'Serviços')
            .should('be.visible')
        //Escolhendo o serviço e a data/horário

        //serviço
        cy.contains('div', agendamento.servico.descricao)
            .parent()
            .click()

        //CHECKPOINT
        cy.contains('span', 'Dias Disponíveis')
            .should('be.visible')
        cy.contains('span', 'Horários Disponíveis')
            .should('be.visible')

        //Data
        cy.contains('.dia-semana', agendamento.dia)
            .click()
        cy.contains('.hora-opcao', agendamento.hora)
            .click()
        cy.contains('button', 'Confirmar e reservar')
            .click()

        //CHECKPOINT
        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Tudo certo por aqui! Seu horário está confirmado.')

    })
})