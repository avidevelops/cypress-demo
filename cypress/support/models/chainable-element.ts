import Chainable = Cypress.Chainable;

export type ChainableElement = Chainable<JQuery<Element>>;
export type ChainableListElement = Chainable<JQuery<HTMLLIElement>>;