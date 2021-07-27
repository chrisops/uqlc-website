
describe("Login/Logout", () => {
    it("Should Login", () => {
        cy.visit('https://uqlc.netlify.app/')
        cy.get('.ml-auto > :nth-child(5)').click()
        // modul should open with login form

        cy.get('[type="email"]').type('gas1@com')
        cy.get('[type="password"]').type('hello')
        cy.get('[type="submit"]').click()
        cy.get('.ReactModal__Content > :nth-child(1)').click()
    })
    
})