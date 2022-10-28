import { ChainableListElement } from "@support/models/chainable-element";

export class InteractionPanel {

    public get droppable(): ChainableListElement {
        return cy.contains('li', 'Droppable');
    }
}