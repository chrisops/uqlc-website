describe("just a dummy", () => {
    it("should just work", () => {
        cy.visit('http://localhost:3000/')
        cy.get("#login").click()
        // modul should open with login form

        cy.get('[type="email"]').type('testguy@test.com')
        cy.get('[type="password"]').type('admin')
        cy.get('[type="submit"]').click()

    })
    
})