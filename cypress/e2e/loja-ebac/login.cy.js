/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        
    })

    afterEach(() => {
        cy.screenshot()
        
    })
 
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('adriannosanttos.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, adriannosanttos.teste (não é adriannosanttos.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('usuario.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
          
    })

    it('Deve exibir uma messagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('adriannosanttos.teste@teste.com.br')
        cy.get('#password').type('teste@1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail adriannosanttos.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
        
    })

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, adriannosanttos.teste (não é adriannosanttos.teste? Sair)')
        
    })

    it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then( dados => {
        cy.get('#username').type(dados.usuario, {log: false})
        cy.get('#password').type(dados.senha , {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, adriannosanttos.teste (não é adriannosanttos.teste? Sair)')
            
        })
        
    })

    it.only('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('adriannosanttos.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, adriannosanttos.teste (não é adriannosanttos.teste? Sair)')
        
    });
})