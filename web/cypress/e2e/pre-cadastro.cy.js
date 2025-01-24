import preRegPage from '../support/pages/pre-reg.page'
import homePage from '../support/pages/home.page'
import preReg from '../support/actions/prereg'
import header from '../support/pages/components/header'


describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {
    preReg.start('Bruno Teste', 'brunoteste@gmail.com')
    preReg.verify('Bruno', 'brunoteste@gmail.com')
  })

  it('Campos obrigatórios', () => {
    preReg.start(null, null)
    preReg.alert('Nome Completo', 'O campo nome é obrigatório.')
    preReg.alert('E-mail', 'O campo e-mail é obrigatório.')
    
  })

  it('Não deve fazer o cadastro com o nome incompleto', () => {
    preReg.start('Bruno', 'brunoteste@gmail.com')
    preReg.alert('Nome Completo', 'Informe seu nome completo.')
    
  })

  it('Não deve fazer o cadastro com o e-mail incorreto', () => {
    preReg.start('Bruno Teste', 'www.brunoteste.com')
    preReg.alert('E-mail', 'O e-mail inserido é inválido.')
    
  })
})