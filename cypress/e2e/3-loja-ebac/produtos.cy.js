/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/#') 
        cy.get('.products > .row')
        //.first()
        //.last()
        //eq(2)
        .contains('Apollo Running Short')
        .click()

        cy.get('#tab-title-description > a').should('exist')
    })

    it('Deve selecionar um produto da lista', () => {
        
    })
});