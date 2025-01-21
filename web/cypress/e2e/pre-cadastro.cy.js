describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {
    cy.visit('/')
    //Clicando e validando o botao de cadastro
    cy.get('nav a[href="pre-cadastro"]')
      .click()
    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')
      
    //Preenchendo os campos e confirmando
    cy.get('input[name="full-name"]')
      .type('Bruno Teste')
    cy.get('input[name="email"]')
      .type('brunoteste@gmail.com')

    cy.contains('button', 'Continuar')
      .click()
      
    //Validando o cadastro
    cy.get('.user-name')
      .should('be.visible')
      .and('have.text', 'Olá, Bruno')
    cy.get('.user-email')
      .should('be.visible')
      .and('have.text', 'brunoteste@gmail.com')   
  })

  it('Campos obrigatórios', ()=>{
    cy.visit('/')

    //Clicando e validando o botao de cadastro
    cy.get('nav a[href="pre-cadastro"]')
      .click()
    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    //Clicando com os dois campos vázios
    cy.contains('button[type="submit"]', 'Continuar')
      .click()

    //Validando se a mensagem de alerta aparece
    cy.contains('label', 'Nome Completo')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'O campo nome é obrigatório.')  

    cy.contains('label', 'E-mail')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'O campo e-mail é obrigatório.')  
  })

  it('Não deve fazer o cadastro com o nome incompleto', ()=>{
    cy.visit('/')
    
    //Clicando e validando o botao de cadastro
    cy.get('nav a[href="pre-cadastro"]')
      .click()
    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    //Clicando com o campo nome incompleto
    cy.get('input[name="full-name"]')
      .type('Bruno')
    cy.get('input[name="email"]')
      .type('brunoteste@gmail.com')

    cy.contains('button[type="submit"]', 'Continuar')
      .click()

    //Validando se duas mensagens de alerta aparecem
    cy.contains('label', 'Nome Completo')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'Informe seu nome completo.')    
  })

  it('Não deve fazer o cadastro com o e-mail incorreto', ()=>{
    cy.visit('/')
    
    //Clicando e validando o botao de cadastro
    cy.get('nav a[href="pre-cadastro"]')
      .click()
    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    //Clicando com o campo e-mail incorreto
    cy.get('input[name="full-name"]')
      .type('Bruno Teste')
    cy.get('input[name="email"]')
      .type('www.brunoteste.com')

    cy.contains('button[type="submit"]', 'Continuar')
      .click()

    //Validando se a mensagem de alerta aparece
    cy.contains('label', 'E-mail')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'O e-mail inserido é inválido.')    
  })
})