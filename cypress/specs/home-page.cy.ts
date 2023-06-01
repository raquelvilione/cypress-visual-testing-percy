/// <reference path="../support/index.ts" />

import basePage from "pages/base/base.page";
import homePage from "pages/home/home.page";

beforeEach(() => {
    basePage.loginDemoApplitools();
});

describe("Home Page", { tags: ['@prod', '@home-page'] }, () => {
    it('Access home page site', () => {
        homePage.validateLogin();
        basePage.percySnapshot('Home-Page');
    })
})