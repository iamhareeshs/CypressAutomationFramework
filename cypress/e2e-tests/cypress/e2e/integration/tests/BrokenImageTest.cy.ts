/**
 * @author Hareesh S
 */
// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";
import {before, beforeEach, cy, describe, it} from '../../../local-cypress';
import BrokenImageActions from '../../pageobjects/pageactions/BrokenImageActions'

describe('BrokenImage', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    const brokenImageActions = new BrokenImageActions();
    before(() => {
        cy.visit(common.url)
    });
    it('TC02 - Verify broken image', () => {
        brokenImageActions.verifyBrokenImage();
    })
})