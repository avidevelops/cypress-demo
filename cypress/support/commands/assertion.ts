Cypress.Commands.add('assertText', {
    prevSubject: true,
}, (element: JQuery<Element>, expectedText: string) => {
    assert.equal(element.text().trim(), expectedText);
    return cy.wrap(element);
})

Cypress.Commands.add('assertTooltip', {
    prevSubject: true,
}, (element: JQuery<Element>, expectedText: string) => {
    cy.wrap(element)
    .trigger('mouseover', {force: true})
    .get('.tooltip-inner')
    .should('contain.text', expectedText);

    cy.wrap(element).trigger('mouseout', {force: true});

    return cy.wrap(element);
})