import { ChainableListElement } from "@support/models/chainable-element";

export class WidgetPanel {

    public get progressBar(): ChainableListElement {
        return cy.contains('li', 'Progress Bar');
    }

    public get toolTips(): ChainableListElement {
        return cy.contains('li', 'Tool Tips');
    }
}