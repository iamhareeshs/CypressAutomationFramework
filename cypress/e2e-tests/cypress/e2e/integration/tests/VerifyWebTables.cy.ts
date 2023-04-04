/**
 * @author Hareesh S
 */

// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";
import {before, beforeEach, cy, describe, it} from '../../../local-cypress';
import WebTablesPageActions from "../../pageobjects/pageactions/WebTablesPageActions";
// @ts-ignore
import tablesTestData from "../../../fixtures/WebTableTestData.json";

const demoQAtablesUrl = common.url + "webtables";

describe('WebTables', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    const webTablesPageActions = new WebTablesPageActions();
    before(() => {
        cy.visit(common.url)
    });

    it('TC01- Scenario A - Verify user can enter new data into the table', () => {
        webTablesPageActions.clickOnElementsTab();
        webTablesPageActions.clickOnWebTables();
        webTablesPageActions.validateRegistrationForm()
    })

    it('TC01- Scenario B - Verify user can edit the row in a table', () => {
        const firstName = tablesTestData.user.editedFirstName;
        const lastName = tablesTestData.user.editedLastName;
        cy.visit(demoQAtablesUrl);
        webTablesPageActions.editAndValidateTable(firstName, lastName);
    })
});