declare namespace Cypress {
    interface Chainable {
        findRowContainingFirstName(firstName: string): import('@support/models/chainable-element').ChainableElement;

        assertText(expectedText: string): import('@support/models/chainable-element').ChainableElement;
        assertTooltip(expectedText: string): import('@support/models/chainable-element').ChainableElement;

        findByRole(role: string): import('@support/models/chainable-element').ChainableElement;
    }
}