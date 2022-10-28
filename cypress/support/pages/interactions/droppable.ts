import { ChainableElement } from "@support/models/chainable-element";

export class Droppable {
    public get dragMe(): ChainableElement {
        return cy.get("#draggable");
    }

    public get dropped(): ChainableElement {
        return cy.get("#droppable");
    }
}