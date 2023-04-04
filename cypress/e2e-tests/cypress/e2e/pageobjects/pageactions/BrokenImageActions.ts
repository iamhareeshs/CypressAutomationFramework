import BrokenImagePageElements from '../../pageobjects/pageelements/BrokenImagePageElements'
import WebTablesPageElements from '../pageelements/WebTablesPageElements';

const expectedImageUrl = '/images/Toolsqa_1.jpg';
let brokenImageElements: BrokenImagePageElements;
let webTablesPageElements: WebTablesPageElements;
export default class BrokenImageActions {
    
    constructor() {
        brokenImageElements = new BrokenImagePageElements();
        webTablesPageElements = new WebTablesPageElements();
    }

    verifyBrokenImage() {
        webTablesPageElements.getElementsTab().should('be.visible').click();
        brokenImageElements.getBrokenLinks().should('be.visible').click();
        brokenImageElements.getBrokenImage().invoke('attr', 'src').should('eq', expectedImageUrl);
    }


}