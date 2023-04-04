import {cy} from '../../../local-cypress';

import {
    dragMeBox,
    dropHereBox,
    droppableTab,
    interactionTab

} from '../../locators/DragAndDropPage';

export default class ProgresBarElements {
    getDragMeBox() {
        return cy.get(dragMeBox);
    }

    getDropHereBox() {
        return cy.get(dropHereBox);
    }

    getDroppableTab() {
        return cy.get(droppableTab);
    }

    getInteractionTab() {
        return cy.get(interactionTab);
    }
}