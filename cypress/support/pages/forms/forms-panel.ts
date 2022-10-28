import { ChainableListElement } from "@support/models/chainable-element";

export class FormPanel {

    public get practiceForm(): ChainableListElement {
        return cy.contains('li', 'Practice Form');
    }
}