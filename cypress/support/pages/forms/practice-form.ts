import { AutoComplete } from "@support/components/autocomplete";
import { MenuDropdown } from "@support/components/menu-dropdown";
import { ChainableElement } from "@support/models/chainable-element";

export class StudentRegistrationForm {

    private get firstName(): ChainableElement {
        return cy.get('#firstName');
    }

    private get lastName(): ChainableElement {
        return cy.get('#lastName');
    }

    private get email(): ChainableElement {
        return cy.get('#userEmail');
    }

    private gender(gender: string): ChainableElement {
        return cy.get('#genterWrapper').find('label').filter(`:contains(${gender})`)
    }

    private get mobile(): ChainableElement {
        return cy.get('#userNumber');
    }

    private get dob(): ChainableElement {
        return cy.get('#dateOfBirthInput');
    }

    private get subject(): AutoComplete {
        return new AutoComplete(() => cy.get('#subjectsContainer'));
    }

    private hobbies(hobby: string): ChainableElement {
        return cy.get('#hobbiesWrapper').find('label').filter(`:contains(${hobby})`);
    }

    private get picture(): ChainableElement {
        return cy.get('#uploadPicture');
    }

    private get address(): ChainableElement {
        return cy.get('#currentAddress');
    }

    private get stateMenu(): MenuDropdown {
        cy.get('#state').click();
        return new MenuDropdown();
    }

    private get cityMenu(): MenuDropdown {
        cy.get('#city').click();
        return new MenuDropdown();
    }

    public get submit(): ChainableElement {
        return cy.get('#submit');
    }

    public get closeModal(): ChainableElement {
        return cy.get('#closeLargeModal');
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

    public selectGender(gender: string) {
        this.gender(gender).click();
    }

    public addMobile(mobile: string) {
        this.mobile.clear();
        this.mobile.type(mobile);
    }

    public addDob(dob: string) {
        this.dob.clear();
        this.dob.type(dob);
    }

    public addSubject(searchString: string) {
        this.subject.search(searchString).selectOption(0).click();
    }

    public addHobbies(hobby: string) {
        this.hobbies(hobby).click();
    }

    public addPicture(fileName: string) {
        this.picture.selectFile(fileName);
    }

    public addAddress(address: string) {
        this.address.clear();
        this.address.type(address);
    }

    public selectCity(city: string) {
        this.cityMenu.items.filter(`:contains(${city})`).click();
    }

    public selectState(state: string) {
        this.stateMenu.items.filter(`:contains(${state})`).click();
    }
}