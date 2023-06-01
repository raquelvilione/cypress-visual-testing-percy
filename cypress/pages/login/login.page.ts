/// <reference path="../../support/index.ts" />

import loginElements from './login.elements';

class loginPage {
    accessUrlLogin() {
        cy.visit('/');
    }

    fillUser(user) {
        cy.get(loginElements.txt_user).type(user);
    }

    fillPassword(password) {
        cy.get(loginElements.txt_password).type(password, { log: false });
    }

    clickConfirmButton() {
        cy.get(loginElements.btn_log_in).click({ force: true });
    }
}

export default new loginPage();
