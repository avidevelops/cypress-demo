import { ChainableElement } from "@support/models/chainable-element";

export class RegistrationForm {

    private get firstName(): ChainableElement {
        return cy.get('#firstName');
    }

    private get lastName(): ChainableElement {
        return cy.get('#lastName');
    }

    private get email(): ChainableElement {
        return cy.get('#userEmail');
    }

    private get age(): ChainableElement {
        return cy.get('#age');
    }

    private get salary(): ChainableElement {
        return cy.get('#salary');
    }

    private get department(): ChainableElement {
        return cy.get('#department');
    }

    public get submit(): ChainableElement {
        return cy.get('#submit');
    }

    public addFirstName(firstName : string) {
        if (firstName != undefined) {
            this.firstName.clear();
            this.firstName.type(firstName);
        }
    }

    public addLastName(lastName : string) {
        if (lastName != undefined) {
            this.lastName.clear();
            this.lastName.type(lastName);
        }
    }

    public addEmail(email : string) {
        if (email != undefined) {
            this.email.clear();
            this.email.type(email);
        }
    }

    public addAge(age : string) {
        if (age != undefined) {
            this.age.clear();
            this.age.type(age);
        }
    }

    public addSalary(salary : string) {
        if (salary != undefined) {
            this.salary.clear();
            this.salary.type(salary);
        }
    }

    public addDepartment(department : string) {
        if (department != undefined) {
            this.department.clear();
            this.department.type(department);
        }
    }
}