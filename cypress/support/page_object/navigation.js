export class route{
    formLayout() {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    }
}
export const navigateTo = new route()