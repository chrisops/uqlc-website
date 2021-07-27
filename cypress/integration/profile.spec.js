


describe("Make a profile", () => {
    it("Should make a profile", () => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/profile"]')

        cy.get('form > :nth-child(1)').type("Jimbo")
        cy.get('form > :nth-child(2)').type("11")
        cy.get('form > :nth-child(3)').type("Goalie")
        cy.get('form > :nth-child(4)').type("4")
        cy.get('form > [type="submit"]').click()
    })
})