
describe("Get the calendar", () => {
    it("Displays the calendar", () => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/events"]').click()
    })
})