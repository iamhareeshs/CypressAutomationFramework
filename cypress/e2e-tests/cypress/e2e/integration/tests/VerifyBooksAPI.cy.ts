/**
 * @author Hareesh S
 */
// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";
import {cy} from '../../../local-cypress';
import RandomStringGenerator from '../../../support/RandomStringGenerator'
import "cypress-localstorage-commands";
import {
    userName
} from './VerifyCreateUserAPI.cy';

const url = common.bookAPIURL;

describe('AddBooks', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    const randomStringGenerator = new RandomStringGenerator();
    let book = randomStringGenerator.getRandomStringOfGivenLength(7)
    const requestBody = {
        "userId": userName,
        "collectionOfIsbns": [
            {
                "isbn": book
            }
        ]
    };

    before(() => {
        cy.saveLocalStorage();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    it('TC08 - Validate add list of books API', () => {

        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: {"userName": "hgg54545", "password": "Testing123$"}
        }).its('body')
            .then((identity: any) => {
                cy.setLocalStorage("token", identity.token);
            });
        cy.log("Identity token :" + cy.getLocalStorage("token"));

        cy.request({
            method: 'POST',
            url,
            body: requestBody
        }).its('status').should('eq', 201)
    });
});