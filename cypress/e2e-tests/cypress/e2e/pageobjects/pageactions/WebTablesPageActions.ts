import WebTablesPageElements from '../pageelements/WebTablesPageElements';
// @ts-ignore
import tablesTestData from "../../../fixtures/WebTableTestData.json";

let webTablesPageElements: WebTablesPageElements;

export default class WebTablesPageActions {

    constructor() {
        webTablesPageElements = new WebTablesPageElements();
    }

    clickOnElementsTab() {
        webTablesPageElements.getElementsTab().should('be.visible').click();
    }

    clickOnWebTables() {
        webTablesPageElements.getWebTablesMenu().should('be.visible').click();
    }

    validateRegistrationForm() {
        webTablesPageElements.getAddButton().click();
        webTablesPageElements.getFirstName().should('be.visible').clear().type(tablesTestData.user.firstname);
        webTablesPageElements.getLastName().should('be.visible').clear().type(tablesTestData.user.lastname);
        webTablesPageElements.getEmail().should('be.visible').clear().type(tablesTestData.user.email);
        webTablesPageElements.getAge().should('be.visible').clear().type(tablesTestData.user.age);
        webTablesPageElements.getSalary().should('be.visible').clear().type(tablesTestData.user.salary);
        webTablesPageElements.getDepartment().should('be.visible').clear().type(tablesTestData.user.department);
        webTablesPageElements.getSubmitButton().should('be.visible').click();
        this.assertTableRows();
    }

    editAndValidateTable(firstName: String, lastName: String) {
        webTablesPageElements.getEditButton().click();
        webTablesPageElements.getFirstName().should('be.visible').clear().type(firstName);
        webTablesPageElements.getLastName().should('be.visible').clear().type(lastName);
        webTablesPageElements.getSubmitButton().should('be.visible').click();
        this.assertTableRowsAfterEdit(firstName, lastName);
    }

    assertTableRowsAfterEdit(firstName: String, lastName: String) {
        webTablesPageElements.getTableRows().should('contain', firstName);
        webTablesPageElements.getTableRows().should('contain', lastName);
    }

    assertTableRows() {
        webTablesPageElements.getTableRows().should('contain', tablesTestData.user.firstname);
        webTablesPageElements.getTableRows().should('contain', tablesTestData.user.lastname);
        webTablesPageElements.getTableRows().should('contain', tablesTestData.user.age);
        webTablesPageElements.getTableRows().should('contain', tablesTestData.user.email);
        webTablesPageElements.getTableRows().should('contain', tablesTestData.user.department);
        webTablesPageElements.getTableRows().should('contain', tablesTestData.user.salary);
    }

};