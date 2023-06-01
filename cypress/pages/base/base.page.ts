/// <reference path="../../support/index.ts" />

class basePage {
    loginDemoApplitools() {
        cy.loginDemoApplitools();
        cy.visit('/app.html')
    }

    percySnapshot(baseline) {
        cy.percySnapshot(baseline);
    }
}

export default new basePage();