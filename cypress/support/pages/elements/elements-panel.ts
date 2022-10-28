import { ChainableListElement } from "@support/models/chainable-element";

export class ElementsPanel {

    public get webTables(): ChainableListElement {
        return cy.contains('li', 'Web Tables');
    }

    public get brokenLinkImages(): ChainableListElement {
        return cy.contains('li', 'Broken Links - Images');
    }
}