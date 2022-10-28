import { ChainableElement } from "@support/models/chainable-element";

export class Tooltips {
    public get tooltip(): ChainableElement {
        return cy.get("#toolTipButton");
    }
}