class ProdutosPage {

    visitarUrl() { 
        cy.visit('produtos')

    }

    buscarProduto(nomeProduto){
        cy.get('[type="text"]').eq(1).type(nomeProduto)
        cy.get('[method="get"] .button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()
        
        
    
    }

    visitarProduto(nomeProduto) {
        cy.visit(`produtos/${nomeProduto}`)
    }

    addProdutoCarrinho(tamanho,cor,quantidade) {
       cy.get('.button-variable-item-' + tamanho).click()
       cy.get(`.button-variable-item-${cor}`).click()
       cy.get('.input-text').clear().type(quantidade)
       cy.get('.single_add_to_cart_button').click()


    }
}

export default new ProdutosPage()