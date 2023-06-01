/// <reference types="cypress" />
/// <reference types="@cypress/grep" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
}

import cypress = require('cypress');
import 'cypress-mochawesome-reporter/register';
import '@testing-library/cypress/add-commands';
import '@percy/cypress'

const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

declare namespace Cypress {
    // specify additional properties in the TestConfig object
    // in our case we will add "tags" property
    interface TestConfigOverrides {
        /**
         * List of tags for this test
         * @example a single tag
         *  it('logs in', { tags: '@smoke' }, () => { ... })
         * @example multiple tags
         *  it('works', { tags: ['@smoke', '@slow'] }, () => { ... })
         */
        tags?: string | string[]
    }
}

// Error
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to visit Demo Applitools
             * @example cy.loginDemoApplitools()
             */
            loginDemoApplitools(): Chainable<Window>
        }
    }
}

//Custom Commands
Cypress.Commands.add('loginDemoApplitools', (
    user = Cypress.env('user'),
    password = Cypress.env('password')
) => {
    cy.session('login', () => {
        cy.visit('/');
        cy.get('#username').type(user);
        cy.get('#password').type(password, { log: false });
        cy.get('#log-in').click({ force: true });
        cy.get('div[class="logged-user-i"]').should('be.visible');
    });
});