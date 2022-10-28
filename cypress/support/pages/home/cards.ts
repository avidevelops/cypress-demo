import { ChainableElement } from "@support/models/chainable-element";

export class Cards {

    public get element(): ChainableElement {
        return cy.get('[class="category-cards"]')
    }

    public get elements(): ChainableElement {
        return this.element.contains('Elements');
    }

    public get forms(): ChainableElement {
        return this.element.contains('Forms');
    }

    public get widgets(): ChainableElement {
        return this.element.contains('Widgets');
    }

    public get interactions(): ChainableElement {
        return this.element.contains('Interactions');
    }
}