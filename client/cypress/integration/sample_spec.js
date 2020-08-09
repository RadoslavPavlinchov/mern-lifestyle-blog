describe('Pages Scenarios', () => {

    it('Home Page', () => {
        cy.visit('http://localhost:3000')
        cy.get('a').contains('Lifestyle')
    })

    it('Login Page', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('h2').contains('Sign In')
    })

    it('Render Home and navigate to Login Page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test-id="link-Login"]').click()
        cy.get('h2').contains('Sign In')
    })

    it('Logging in with an user', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('h2').contains('Sign In')
        cy.get('#username').type('test')
        cy.get('#password').type('123456')
        cy.get('button').click()
        cy.get('[data-test-id="link-Profile"]')
    })

})