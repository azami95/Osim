/// <referance types="cypress" />


describe("Mekhron", function() {

    it("H1", function() {


        
        cy.visit("https://github.com")

        cy.get(".h1-mktg").should("be.visible")
        
        cy.get("[data-test-selector='nav-search-input']").type("Mekhron{enter}")
        

        cy.get("h3").should("include.text", "We couldn’t find any repositories matching 'Mekhron'")

        cy.get(".menu-item.selected").contains("0")

        cy.contains('.menu-item', "Users")
        .find('[data-search-type="Users"]')
        .contains(3)
        .click()

        cy.get('.color-fg-muted[href="/mekhron"]').click()
    })
    it.only('', () => {
        cy.contains('span.menu-title', 'Layout')
            .click()
    })
})

console.log('Aziz')