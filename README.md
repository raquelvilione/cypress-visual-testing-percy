# Cypress Visual Testing with Percy

The goal of this project is to use Percy to perform visual testing on a website.

## Stack

- [node js](https://nodejs.org/en/)
- [cypress](https://www.cypress.io/)

## Initial Setup

```shell
git clone https://github.com/raquelvilione/cypress-visual-testing-percy.git
cd cypress-visual-testing-percy
npm install
```

## Open Execution of Tests
After configuring your initial setup, you can run the **npm run test:open** command to run tests in interactive mode, where you can watch the tests running, in addition to using the time-travel and automatic reload features.

```
npm run test:open
```

## Headless Execution of Tests
There is a faster way to run the tests than it would be without the interactive mode in which the user cannot see the test running.

```
npm run test:headless
```

## Commands
It is also possible to find out which scenarios were automated by running the following commands:

Lists the name of the scenarios for each spec
```
npm run list:spec:names
```

Lists the amount of scenarios per tag
```
npm run count:by:tags
```

## Reports
After running the tests using the **npm run test:headless** command a .html file is generated in the project folder cypress-visual-testing-percy\cypress\reports\html\index.html

## Snapshots
![Slack](https://user-images.githubusercontent.com/15036567/242451032-904d0749-d105-43a3-80e9-59c437d6905e.PNG)

![Cypress Cloud](https://user-images.githubusercontent.com/15036567/242450917-7c0660e8-38a8-4b84-b88a-47c21288639c.PNG)

![Percy Cloud](https://user-images.githubusercontent.com/15036567/242451080-ea9194da-5bb6-4017-a7d2-3e516879a428.PNG)
