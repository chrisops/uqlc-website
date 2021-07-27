describe("Profile", () => {
    it("Should edit profile", () => {
        cy.intercept('http://localhost:4000/api/v1/users/login',  {body: [
            {email: "gas1@com", password: "hello"},
            {email: "admin@admin.com", password: "admin", admin:"true"}
        ]})
        cy.intercept('http://localhost:4000/api/v1/posts',  {body: [
            {email: "gas1@com", password: "hello"}
        ]})
        cy.intercept('http://localhost:4000/api/v1/players/showcase',  {body: [
            {email: "gas1@com", password: "hello"}
        ]})
        cy.intercept('http://localhost:4000/api/v1/players/*',  {body: [
            {name: "Jimbo", number: "10", position: "midfield", seasons: "3"}
        ]})

        

        cy.visit('http://localhost:3000/')
        cy.get('.ml-auto > :nth-child(5)').click()
        // modul should open with login form

        cy.get('[type="email"]').type('gas1@com')
        cy.get('[type="password"]').type('hello')
        cy.get('[type="submit"]').click()
        cy.get('.ReactModal__Content > :nth-child(1)').click()
        cy.get('[href="/profile"]').click()
        cy.get('#name').type("Jimbo")
        cy.get('#number').type('10')
        cy.get('#position').type('midfield')
        cy.get('#totalSeasons').type('3')
        cy.get('form > [type="submit"]').click()
        cy.get('[href="/"]').click()
    })
    
})