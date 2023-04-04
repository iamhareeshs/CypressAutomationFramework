/**
 * @author Hareesh S
 */
// @ts-ignore
import common from "../../../fixtures/CommonTestData.json";
import {cy} from '../../../local-cypress';
import RandomStringGenerator from '../../../support/RandomStringGenerator'

export let userName = '';
describe('UserCreation', () => {
    const randomStringGenerator = new RandomStringGenerator();
    userName = randomStringGenerator.getRandomStringOfGivenLength(7);
    const requestBody = {
        "userName": userName,
        "password": "Testing123$"
    };
    const url = common.createUserURL;
    it('TC-07_1 - Verify creation of user account - happy flow', () => {
        cy.request({
            method: 'POST',
            url,
            body: requestBody
        }).then((response: { status: any; body: any; }) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('username', userName)});
    });

    it('TC-07_2 - Verify user creation with an existing username - unhappy flow', () => {
        cy.request({
            method: 'POST',
            url,
            body: requestBody,
            failOnStatusCode: false
        }).then((response: { status: any; body: any; }) => {
            expect(response.status).to.eq(406)
            expect(response.body).to.have.property('message', 'User exists!')});
    });
});