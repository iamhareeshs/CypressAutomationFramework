import DragAndDropElements from '../../pageobjects/pageelements/DragAndDropElements';

let dragAndDropElements: DragAndDropElements;
export default class ProgressBarActions {
    constructor() {
        dragAndDropElements = new DragAndDropElements();
    }

    navigateToDragAndDrop() {
        dragAndDropElements.getInteractionTab().should('be.visible').click();
        dragAndDropElements.getDroppableTab().should('be.visible').click();
    }

    verifyDragAndDrop() {
        const dataTransfer = new DataTransfer();
        dragAndDropElements.getDragMeBox()
            .trigger('mousedown', {which: 1, pageX: 600, pageY: 100})
            .trigger('mousemove', {which: 1, pageX: 800, pageY: 100})
            .trigger('mouseup');
        dragAndDropElements.getDropHereBox().should('have.text', 'Dropped!');

        /*Code without using position
                /*dragAndDropElements.getDragMeBox()
                    .first()
                    .trigger('dragstart', {dataTransfer});
        
                dragAndDropElements.getDropHereBox()
                    .eq(0)
                    .trigger('drop', {dataTransfer});*/
    }
}