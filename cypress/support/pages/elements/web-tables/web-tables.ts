import { UserGenerator } from "@support/helpers/user-creator";
import { ChainableElement } from "@support/models/chainable-element";
import { UserModel } from "@support/models/user";
import { RegistrationForm } from "./registration-form";

export class WebTables {

    private get addButton(): ChainableElement {
        return cy.get('#addNewRecordButton');
    }

    private editButton(row: string): ChainableElement {
        return cy.get(`#edit-record-${row}`);
    }

    public addRow(fixtureName : string) {
        this.addButton.click();
        const form = new RegistrationForm();
        cy.fixture(fixtureName).then(userData => {
            form.addFirstName(userData.firstName);
            form.addLastName(userData.lastName);
            form.addEmail(userData.email);
            form.addAge(userData.age);
            form.addSalary(userData.salary);
            form.addDepartment(userData.department);
            form.submit.click();
        });
    }

    public editRow(fixtureName : string) {
        
        const form = new RegistrationForm();
        cy.fixture(fixtureName).then(userData => {
            cy.findRowContainingFirstName(userData.existingFirstName)
            .find(("[role='gridcell']"))
            .eq(6)
            .find("[title='Edit']")
            .click();
            form.addFirstName(userData.firstName);
            form.addLastName(userData.lastName);
            form.addEmail(userData.email);
            form.addAge(userData.age);
            form.addSalary(userData.salary);
            form.addDepartment(userData.department);
            form.submit.click();
        });
    }

    public get rows() : ChainableElement {
        return cy.get('.rt-tr-group');
    }

    public row(index: number) : ChainableElement {
        return new WebTables().rows.eq(index-1)
    }

}