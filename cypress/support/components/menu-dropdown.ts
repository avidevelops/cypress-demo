import { ChainableElement } from "@support/models/chainable-element";

export class MenuDropdown {
    public get element(): ChainableElement {
        return cy.get('[class*="menu"]');
    }

    public get items(): ChainableElement {
        return this.element.find('[id*="option"]');
    }
}