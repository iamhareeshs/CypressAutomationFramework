import {cy} from '../../../local-cypress';
 import {
     toolTipButton,
     toolTipsTab,
     widgetsTab
 } from '../../locators/ToolTipsPage';

 export default class ToolTipElements{
     getToolTipButton(){
         return cy.get(toolTipButton);
     }

     getTipsTab(){
         return cy.get(toolTipsTab);
     }

     getWidgetsTab() {
         return cy.get(widgetsTab);
     }
 }