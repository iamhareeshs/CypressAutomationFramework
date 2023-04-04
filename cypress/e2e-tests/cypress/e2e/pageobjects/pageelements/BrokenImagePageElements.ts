import {cy} from '../../../local-cypress';

import {
    brokenLinks,
    brokenImage
} from '../../locators/BrokenImagePage';

export default class BrokenImagePageElements {
    getBrokenLinks() {
        return cy.get(brokenLinks);
    }

    getBrokenImage() {
        return cy.get(brokenImage);
    }
};