/**
 * @author Hareesh S
 */
import {before, beforeEach, cy, describe, it} from '../../../local-cypress';
import ProgressBarActions from '../../pageobjects/pageactions/ProgressBarActions';

// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";

describe('ProgressBar', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    const progressBarActions = new ProgressBarActions();
    before(() => {
        cy.visit(common.url)
    });
    it('TC04 - Verify the progress bar', () => {
        progressBarActions.navigateToProgressBarPage();
        progressBarActions.verifyProgressBar();
    })
})