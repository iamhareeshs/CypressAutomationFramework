/**
 * @author Hareesh S
 */
import {before, beforeEach, cy, describe, it} from '../../../local-cypress';
import ToolTipActions from '../../pageobjects/pageactions/ToolTipActions';
// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";

describe('ToolTip', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    const toolTipActions = new ToolTipActions();
    before(() => {
        cy.visit(common.url)
    });
    it('TC04 - Verify tool tip', () => {
        toolTipActions.navigateToToolTipPage();
        toolTipActions.verifyToolTip();
    })
})