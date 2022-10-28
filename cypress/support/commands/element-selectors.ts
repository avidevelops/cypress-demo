Cypress.Commands.add('findByRole', {
    prevSubject: true,
}, (subject: JQuery<Element>, role: string) => cy.wrap(subject).find(`[role=${role}]`));