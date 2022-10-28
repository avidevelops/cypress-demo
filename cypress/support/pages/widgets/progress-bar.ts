import { ChainableElement } from "@support/models/chainable-element";

export class ProgressBar {
    public get progressBar(): ChainableElement {
        return cy.get("[role='progressbar']", {timeout:180000});
    }

    public get sButton(): ChainableElement {
        return cy.get("#startStopButton");
    }
}