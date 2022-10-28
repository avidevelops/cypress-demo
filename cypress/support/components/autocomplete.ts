import { ChainableElement } from "@support/models/chainable-element";

class Dropdown {
    public get element(): ChainableElement {
        return cy.get('.subjects-auto-complete__menu-list');
    }

    public get options(): ChainableElement {
        return this.element.find('.subjects-auto-complete__option');
    }

    public selectOption(index: number): ChainableElement {
        return this.options.eq(index);
    }
}

export class AutoComplete {
    constructor(private parentFn: () => ChainableElement){
    }

    public get element() {
        return this.parentFn();
    }

    public get input() {
        return this.element.find('input');
    }

    public search(value: string): Dropdown {
        this.input.type(`${value}`);
        return this.dropdown;
    }

    public get dropdown(): Dropdown {
        return new Dropdown();
    }
}