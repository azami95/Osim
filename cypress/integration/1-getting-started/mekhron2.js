
describe ("Moscow", function () {
    it ("Weather", function (){
        //cy.intercept({method: 'Get', path: 'weather?address=Moscow'}).as('weatherBoy')
        cy.intercept('GET', 'weather?address=Moscow',{fixture:'weather.json'})
        cy.visit("https://os-weather.herokuapp.com")
        cy.get('input[placeholder="Location"]').type("Moscow")
        cy.get("button.submit").click()
        cy.get('input[placeholder="Location"]').clear()
        cy.get("button.submit").click()
        cy.get("p#message-1").should("be.visible")
        //cy.wait('@weatherBoy')
        
        //cy.get('@weatherBoy').then(fnu => {
            //console.log(fnu)
            //expect(fnu.response.body.forecast).to.equal("Clear. It's currently 8 degrees out. But feels like 5 temperature out.")

        //})
    })
})    
