describe("Login/Logout", () => {
    it("Should Login", () => {
        cy.intercept('http://localhost:4000/api/v1/users/login',  {body: [
            {email: "gas1@com", password: "hello"}
        ]})
        cy.intercept('http://localhost:4000/api/v1/posts',  {body: [
            {email: "gas1@com", password: "hello"}
        ]})
        cy.intercept('http://localhost:4000/api/v1/players/showcase',  {body: [
            {email: "gas1@com", password: "hello"}
        ]})
        

        cy.visit('http://localhost:3000/')
        cy.get('.ml-auto > :nth-child(5)').click()
        // modul should open with login form

        cy.get('[type="email"]').type('gas1@com')
        cy.get('[type="password"]').type('hello')
        cy.get('[type="submit"]').click()
        cy.get('.ReactModal__Content > :nth-child(1)').click()
    })
    
})