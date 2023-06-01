/// <reference path="../support/index.ts" />

import homePage from "pages/home/home.page";
import loginPage from "../pages/login/login.page";

describe('Login', { tags: ['@prod', '@login'] }, () => {
    const user = Cypress.env('user')
    const password = Cypress.env('password')

    it('Login successfully', () => {
        loginPage.accessUrlLogin();
        loginPage.fillUser(user);
        loginPage.fillPassword(password);
        loginPage.clickConfirmButton();
        homePage.validateLogin();
    });
})
