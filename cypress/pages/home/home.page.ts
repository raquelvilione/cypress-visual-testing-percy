/// <reference path="../../support/index.ts" />

import homeElements from './home.elements';

class homePage {
    validateLogin() {
        cy.get(homeElements.div_avatar).should('be.visible');
    }
}

export default new homePage();