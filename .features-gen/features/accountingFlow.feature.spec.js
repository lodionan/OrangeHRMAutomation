// Generated from: features\accountingFlow.feature
import { test } from "../../tests/pageFixtures/pageFixtures.ts";

test.describe('accounting flow verifications', () => {

  test('Verify attachments are saved correctly on custom fields section of the profilePage', async ({ Given, When, Then, And, dashboardPage, page, profilePage }) => { 
    await Given('I navigate to the dashboard page', null, { dashboardPage, page }); 
    await When('I navigate to "My Info" page', null, { dashboardPage, profilePage }); 
    await And('I attach a pdf file', null, { profilePage }); 
    await Then('The file must be correctly attached', null, { profilePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\accountingFlow.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the dashboard page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I navigate to \"My Info\" page","stepMatchArguments":[{"group":{"start":14,"value":"\"My Info\"","children":[{"start":15,"value":"My Info","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I attach a pdf file","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The file must be correctly attached","stepMatchArguments":[]}]},
]; // bdd-data-end