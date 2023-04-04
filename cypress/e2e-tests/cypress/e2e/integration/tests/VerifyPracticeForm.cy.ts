/**
 * @author Hareesh S
 */

import {before, beforeEach, cy, describe, it} from '../../../local-cypress';
import PracticeFormActions from '../../pageobjects/pageactions/PracticeFormActions';

// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";

describe('PracticeForm', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    const practiceFormActions = new PracticeFormActions();
    before(() => {
        cy.visit(common.url)
    });
    it('TC04 - Verify the practice form', () => {
        practiceFormActions.navigateToDragAndDrop();
        practiceFormActions.verifyPracticeForm();
    })
})