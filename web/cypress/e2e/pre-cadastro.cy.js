
describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {
    const user = {
      nome: 'Bruno Teste',
      email: 'brunoteste@gmail.com'
    }
    
    cy.startPreRegistration(user)
    cy.verifyPreRegistered(user)
  })

  it('Campos obrigatórios', () => {
    cy.startPreRegistration()
    cy.alertHave('Nome Completo', 'O campo nome é obrigatório.')
    cy.alertHave('E-mail', 'O campo e-mail é obrigatório.')
  })

  it('Não deve fazer o cadastro com o nome incompleto', () => {
    const user = {
      nome: 'Bruno',
      email: 'brunoteste@gmail.com'
    }

    cy.startPreRegistration(user)
    cy.alertHave('Nome Completo', 'Informe seu nome completo.')
  })

  it('Não deve fazer o cadastro com o e-mail incorreto', () => {
    const user = {
      nome: 'Bruno Teste',
      email: 'www.brunoteste.com'
    }

    cy.startPreRegistration(user)
    cy.alertHave('E-mail', 'O e-mail inserido é inválido.')
  })
})