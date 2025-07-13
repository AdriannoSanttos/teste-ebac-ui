/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page"

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
        
    })

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('exist')
        
    })

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Hera Pullover Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
        
    })

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Apollo-Running-Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
        
    })
     it('Deve adicionar produto ao carrinho', () => {
         let qtd = 2
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('L', 'Blue', qtd )
       

        cy.get('.woocommerce-message').should('contain',  qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        
     })

      it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade )
       

        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

        })
        
        
     })
     
})