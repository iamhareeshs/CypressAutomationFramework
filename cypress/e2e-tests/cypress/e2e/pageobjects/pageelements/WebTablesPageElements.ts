import {cy} from '../../../local-cypress';

import {
    elementsTab,
    webtables,
    firstName,
    lastName,
    email,
    age,
    salary,
    department,
    submitButton,
    addButton,
    tableRows,
    editButton,
    editFirstName,
    editLastName
} from '../../locators/WebTablesPage';

export default class WebTablesPageElements {
    getElementsTab() {
        return cy.get(elementsTab);
    }

    getFirstName() {
        return cy.get(firstName);
    }

    getLastName() {
        return cy.get(lastName);
    }

    getEmail() {
        return cy.get(email);
    }

    getAge() {
        return cy.get(age);
    }

    getSalary() {
        return cy.get(salary);
    }

    getDepartment() {
        return cy.get(department);
    }

    getWebTablesMenu() {
        return cy.get(webtables);
    }

    getSubmitButton() {
        return cy.get(submitButton);
    }

    getAddButton() {
        return cy.get(addButton);
    }

    getTableRows() {
        return cy.get(tableRows);
    }

    getEditButton() {
        cy.wait(500);
        return cy.get(editButton);
    }

    getEditFirstName() {
        return cy.get(editFirstName);
    }

    getEditLastName() {
        return cy.get(editLastName);
    }

};