import ToolTipElements from '../../pageobjects/pageelements/ToolTipElements';

let toolTipElements: ToolTipElements;
export default class ToolTipActions {

    constructor() {
        toolTipElements = new ToolTipElements();
    }

    navigateToToolTipPage() {
        toolTipElements.getWidgetsTab().should('be.visible').click();
        toolTipElements.getTipsTab().should('be.visible').click();
    }
    verifyToolTip(){
        toolTipElements.getToolTipButton().trigger('mouseover')
            .wait(1000)
            .should('have.attr','aria-describedby','buttonToolTip');

    }
}