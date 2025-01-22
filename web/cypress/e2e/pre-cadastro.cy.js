import preRegPage from '../support/pages/pre-reg.page'
import homePage from '../support/pages/home.page'
import header from '../support/pages/components/header'

describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {

    homePage.go()
    header.goToPreReg()
    preRegPage.fillForm('Bruno Teste', 'brunoteste@gmail.com')
    preRegPage.submit()
    //Validando o cadastro
    header.verifyPreReg('Bruno', 'brunoteste@gmail.com')
  })

  it('Campos obrigatórios', () => {
    homePage.go()
    header.goToPreReg()
    //preRegPage.fillForm('Bruno Teste', 'brunoteste@gmail.com')
    preRegPage.submit()
    //Validando se a mensagem de alerta aparece
    preRegPage.alertHave('Nome Completo', 'O campo nome é obrigatório.')
    preRegPage.alertHave('E-mail', 'O campo e-mail é obrigatório.')
  })

  it('Não deve fazer o cadastro com o nome incompleto', () => {
    homePage.go()
    header.goToPreReg()
    preRegPage.fillForm('Bruno', 'brunoteste@gmail.com')
    preRegPage.submit()

    //Validando se duas mensagens de alerta aparecem
    preRegPage.alertHave('Nome Completo', 'Informe seu nome completo.')
  })

  it('Não deve fazer o cadastro com o e-mail incorreto', () => {
    homePage.go()
    header.goToPreReg()
    preRegPage.fillForm('Bruno Teste', 'www.brunoteste.com')
    preRegPage.submit()

    //Validando se a mensagem de alerta aparece
    preRegPage.alertHave('E-mail', 'O e-mail inserido é inválido.')
  })
})