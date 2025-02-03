import calendario from '../fixtures/calendario.json'
import agendamentos from '../fixtures/agendamentos.json'

describe('Agendamento', () => {
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


        cy.iniciarAgendamento()
        cy.escolherProfissional(agendamento.profissional)
        cy.selecionarServico(agendamento.servico.descricao)
        cy.escolherDiaAgendamento(agendamento.dia)
        cy.escolherHorarioAgendamento(agendamento.hora)
        cy.finalizarAgendamento()

        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Tudo certo por aqui! Seu horário está confirmado.')
    })
})
