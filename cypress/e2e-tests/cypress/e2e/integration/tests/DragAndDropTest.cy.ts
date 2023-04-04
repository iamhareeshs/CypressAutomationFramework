/**
 * @author Hareesh S
 */

import {before, beforeEach, cy, describe, it} from '../../../local-cypress';
import DragAndDropActions from '../../pageobjects/pageactions/DragAndDropActions';

// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";

describe('DragAndDrop', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    const dragAndDropActions = new DragAndDropActions();
    before(() => {
        cy.visit(common.url)
    });
    it('TC06 - Verify user can drag and drop', () => {
        dragAndDropActions.navigateToDragAndDrop();
        dragAndDropActions.verifyDragAndDrop();
    })
})