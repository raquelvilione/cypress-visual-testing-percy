import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "65rmig",
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
        mochaJunitReporterReporterOptions: {
            mochaFile: 'cypress/reports/junit/results.json',
        },
        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: 'Cypress Visual Testing with Percy',
            overwrite: true,
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false,
            autoOpen: false,
            quite: true,
            html: false,
            json: true
        },
    },
    env: {
        grepFilterSpecs: true,
        grepOmitFiltered: true
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            require('@cypress/grep/src/plugin')(config);
        },
        baseUrl: 'https://demo.applitools.com/',
        fixturesFolder: 'cypress/fixtures/',
        specPattern: 'cypress/specs/*.cy.ts',
        screenshotsFolder: 'screenshots/',
        supportFile: 'cypress/support/',
        video: true,
        defaultCommandTimeout: 40000,
        pageLoadTimeout: 40000,
        retries: {
            runMode: 1,
            openMode: 0,
        },
        screenshotOnRunFailure: true,
        chromeWebSecurity: false,
    },
});
