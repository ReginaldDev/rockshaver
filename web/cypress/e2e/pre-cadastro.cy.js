
describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {
    cy.startPreRegistration('Bruno Teste', 'brunoteste@gmail.com')
    cy.verifyPreRegistered('Bruno', 'brunoteste@gmail.com')
  })

  it('Campos obrigatórios', () => {
    cy.startPreRegistration()
    cy.alertHave('Nome Completo', 'O campo nome é obrigatório.')
    cy.alertHave('E-mail', 'O campo e-mail é obrigatório.')
    
  })

  it('Não deve fazer o cadastro com o nome incompleto', () => {
    cy.startPreRegistration('Bruno', 'brunoteste@gmail.com')
    cy.alertHave('Nome Completo', 'Informe seu nome completo.')
    
  })

  it('Não deve fazer o cadastro com o e-mail incorreto', () => {
    cy.startPreRegistration('Bruno Teste', 'www.brunoteste.com')
    cy.alertHave('E-mail', 'O e-mail inserido é inválido.')
    
  })
})