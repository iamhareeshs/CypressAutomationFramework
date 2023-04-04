import ProgresBarElements from '../../pageobjects/pageelements/ProgresBarElements';

let progressBarElements: ProgresBarElements;
export default class ProgressBarActions {
    constructor() {
        progressBarElements = new ProgresBarElements();

    }

    navigateToProgressBarPage() {
        progressBarElements.getWidgetsTab().should('be.visible').click();
        progressBarElements.getProgressBarTab().should('be.visible').click();
    }

    verifyProgressBar() {
        progressBarElements.getStartButton().should('be.visible').click();
        cy.wait(6500);
        progressBarElements.getProgressBar().should('have.text', '100%');
    }
}
