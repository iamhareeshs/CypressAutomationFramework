import {cy} from '../../../local-cypress';

import {
    widgetsTab,
    progressBar,
    startButton,
    progressBarTab

} from '../../locators/ProgressBarPage';

export default class ProgresBarElements {
    getWidgetsTab() {
        return cy.get(widgetsTab);
    }

    getProgressBar() {
        return cy.get(progressBar);
    }

    getProgressBarTab() {
        return cy.get(progressBarTab);
    }

    getStartButton() {
        return cy.get(startButton);
    }
}