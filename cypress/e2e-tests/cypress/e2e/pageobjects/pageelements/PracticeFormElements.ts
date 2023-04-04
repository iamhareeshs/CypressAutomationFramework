import {cy} from '../../../local-cypress';

import {
    firstName,
    lastName,
    email,
    dob,
    gender,
    genderLabel,
    hobbies,
    mobile,
    city,
    currentAddress,
    state,
    stateField,
    subject,
    uploadPicture,
    formsTab,
    practiceFormTab,
    submitButton
} from '../../locators/PracticeFormPage';

export default class ProgresBarElements {
   getFirstName(){
       return cy.get(firstName);
   }
    getLastName(){
        return cy.get(lastName);
    }
    getformsTab(){
        return cy.get(formsTab);
    }
    getPracticeFormTab(){
        return cy.get(practiceFormTab);
    }
    getGender(){
       return cy.get(gender);
    }
    getGenderLabel(){
        return cy.get(genderLabel);
    }
    getHobbies(){
       return cy.get(hobbies);
    }
    getUploadPicture(){
       return cy.get(uploadPicture);
    }
    getEmail(){
       return cy.get(email);
    }
    getMobile(){
        return cy.get(mobile);
    }
    getDOB(){
        return cy.get(dob);
    }
    getSubject(){
        return cy.get(subject);
    }
    getCurrentAddress(){
        return cy.get(currentAddress);
    }
    getState(){
        return cy.get(state);
    }
    getCity(){
        return cy.get(city);
    }
    
    getStateField(){
        return cy.get(stateField);
    }
    
    getSubmitButton(){
       return cy.get(submitButton);
    }
}