import { test } from '../tests/pageFixtures/pageFixtures';

test('Is Dashboard open?', async ({ page, dashboardPage }) => {
    await page.goto('/');
    await dashboardPage.isPageLoaded();
    await dashboardPage.openMyInfo();
});

test('Upload Document', async ({ page, profilePage }) => {
    await page.goto('/web/index.php/pim/viewPersonalDetails/empNumber/7');
    await profilePage.isPageLoaded();
    await profilePage.attachInvoice();
});

test('verify the document was correctly uploaded', async ({page, profilePage}) => {
    await page.goto('/web/index.php/pim/viewPersonalDetails/empNumber/7');
    await profilePage.isPageLoaded();
    await profilePage.attachInvoice();
    await profilePage.submitAttachedFile();
    await profilePage.wasFileAttachedCorrectly();
});
