import { UserModel } from "@support/models/user";
import { ElementsPanel } from "@support/pages/elements/elements-panel";
import { WebTables } from "@support/pages/elements/web-tables/web-tables";
import { FormPanel } from "@support/pages/forms/forms-panel";
import { StudentRegistrationForm } from "@support/pages/forms/practice-form";
import { Cards } from "@support/pages/home/cards";
import { Droppable } from "@support/pages/interactions/droppable";
import { InteractionPanel } from "@support/pages/interactions/interactions-panel";
import { ProgressBar } from "@support/pages/widgets/progress-bar";
import { Tooltips } from "@support/pages/widgets/tool-tips";
import { WidgetPanel } from "@support/pages/widgets/widget-panel";

export function UITests() {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('/');
    });

    it('Verify user can enter new data into the table', () => {
        new Cards().elements.click();
        new ElementsPanel().webTables.click();
        const wt = new WebTables();
        wt.addRow('addUser');
        let rowCount = 0;
        wt.rows.each(($el) => {
            cy.wrap(($el.find("[role='gridcell']"))[0]).invoke('text').then(text => {
                if (text.trim().length != 0)
                    rowCount = rowCount + 1;
            });
        });
        
        cy.fixture('addUser').then(userData => {
            let addedRow = wt.row(rowCount).find("[role='gridcell']");
            addedRow.eq(0).assertText(userData.firstName);
            addedRow = wt.row(rowCount).find("[role='gridcell']");
            addedRow.eq(1).assertText(userData.lastName);
            addedRow = wt.row(rowCount).find("[role='gridcell']");
            addedRow.eq(2).assertText(userData.age);
            addedRow = wt.row(rowCount).find("[role='gridcell']");
            addedRow.eq(3).assertText(userData.email);
            addedRow = wt.row(rowCount).find("[role='gridcell']");
            addedRow.eq(4).assertText(userData.salary);
            addedRow = wt.row(rowCount).find("[role='gridcell']");
            addedRow.eq(5).assertText(userData.department);
        });
    });

    it('Verify user can edit existing data into the table', () => {
        new Cards().elements.click();
        new ElementsPanel().webTables.click();
        const wt = new WebTables();
        wt.editRow('editUser');
        let rowCount = 0;
        wt.rows.each(($el) => {
            cy.wrap(($el.find("[role='gridcell']"))[0]).invoke('text').then(text => {
                if (text.trim().length != 0)
                    rowCount = rowCount + 1;
            });
        });

        
        
        cy.fixture('editUser').then(userData => {
            let addedRow = cy.findRowContainingFirstName(userData.firstName).find("[role='gridcell']");
            addedRow.eq(0).assertText(userData.firstName);
            addedRow = cy.findRowContainingFirstName(userData.firstName).find("[role='gridcell']");
            addedRow.eq(1).assertText(userData.lastName);
        });
    });

    it('Verify image is broken', () => {
        new Cards().elements.click();
        new ElementsPanel().brokenLinkImages.click();
        cy.get('img').each(($img) => {
            cy.wrap($img).scrollIntoView().should('be.visible');

            expect((<HTMLImageElement>$img[0]).naturalWidth).to.be.greaterThan(0);
            expect((<HTMLImageElement>$img[0]).naturalHeight).to.be.greaterThan(0);
        })
    });

    it("Verify user can submit the form.", () => {
        new Cards().forms.click();
        new FormPanel().practiceForm.click();
        const form = new StudentRegistrationForm();
        cy.fixture('addStudent').then(studentData => {  
            form.addFirstName(studentData.firstName);
            form.addLastName(studentData.lastName);
            form.addEmail(studentData.email);
            form.selectGender(studentData.gender);
            form.addMobile(studentData.mobile);
            //form.addDob(studentData.dob);
            form.addSubject(studentData.subject);
            form.addHobbies(studentData.hobbies);
            form.addPicture('cypress/fixtures/test.png');
            form.addAddress(studentData.address);
            form.selectState(studentData.state);
            form.selectCity(studentData.city);
            form.submit.click();
        });

        cy.fixture('addStudent').then(studentData => { 
        cy.get('.table.table-bordered > tbody > tr > td:nth-child(1)').each(($el,
            index) => {
               // grabbing all text from second column
               const txt = $el.text();
               // checking the matching condition
               if (txt.includes('Student Name')){
                  // capturing the next sibling with the help of next() method
                  cy.get('.table.table-bordered > tbody > tr > td:nth-child(1)')
                  .eq(index).next().then(function(values){
                     // capturing the text of next sibling
                     const val = values.text();
                     expect(val).to.contains(studentData.firstName + " " + studentData.lastName);
                  })
               }
            });
            form.closeModal.click();
        });
    });

    it("Verify progress bar", () => {
        new Cards().widgets.click();
        new WidgetPanel().progressBar.click();
        const pb = new ProgressBar();
        pb.sButton.click();
        pb.progressBar.invoke('text').should('eq', '100%');
    });

    it("Verify tool tip", () => {
        new Cards().widgets.click();
        new WidgetPanel().toolTips.click();
        const tt = new Tooltips();
       tt.tooltip.assertTooltip("You hovered over the Button"); 
    });

    it("Verify drop", () => {
        new Cards().interactions.click();
        new InteractionPanel().droppable.click();
        const dataTransfer = new DataTransfer();
        const droppable = new Droppable();
        droppable.dragMe.trigger('dragstart', {dataTransfer});
        droppable.dropped.trigger('drop', {dataTransfer}).trigger("dragend"); 
    });
    
}
