import PracticeFormElements from '../../pageobjects/pageelements/PracticeFormElements';

// @ts-ignore
import practiceFormTestData from "../../../fixtures/PracticeFormTestData.json";

let practiceForm: PracticeFormElements;
export default class PracticeFormActions {
    constructor() {
        practiceForm = new PracticeFormElements();
    }

    navigateToDragAndDrop() {
        practiceForm.getformsTab().should('be.visible').click();
        practiceForm.getPracticeFormTab().should('be.visible').click();
    }

    verifyPracticeForm() {
        practiceForm.getFirstName().should('be.visible').clear().type(practiceFormTestData.firstname);
        practiceForm.getLastName().should('be.visible').clear().type(practiceFormTestData.lastname);
        practiceForm.getEmail().should('be.visible').clear().type(practiceFormTestData.email);
        practiceForm.getGender().check(practiceFormTestData.gender, {force: true});
        practiceForm.getMobile().should('be.visible').clear().type(practiceFormTestData.mobile);
        practiceForm.getSubject().should('be.visible').type(practiceFormTestData.subject);
        practiceForm.getUploadPicture().should('be.visible').selectFile(practiceFormTestData.picture);
        practiceForm.getCurrentAddress().should('be.visible').clear().type(practiceFormTestData.currentAddress);
        practiceForm.getStateField().click();
        practiceForm.getSubmitButton().click({force:true});
    }
}