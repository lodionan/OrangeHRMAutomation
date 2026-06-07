import { createBdd } from 'playwright-bdd';
import { test } from '../tests/pageFixtures/pageFixtures.ts';

const { Given, When, Then } = createBdd(test);

Given('I navigate to the dashboard page', async ({ page, dashboardPage }) => {
    await page.goto('/');
    await dashboardPage.isPageLoaded();
});

When('I navigate to {string} page', async ({ dashboardPage, profilePage }, pageName: string) => {
    await dashboardPage.openMyInfo(pageName);
    await profilePage.isPageLoaded();
});

When('I attach a pdf file', async ({ profilePage }) => {
    await profilePage.isPageLoaded();
    await profilePage.attachInvoice();
});

Then('The file must be correctly attached', async ({ profilePage }) => {
    await profilePage.submitAttachedFile();
    await profilePage.wasFileAttachedCorrectly();
});