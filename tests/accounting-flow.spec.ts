import {test} from '../tests/pageFixtures/pageFixtures';

test('Is Dashboard open?', async ({page, dashboardPage}) => {
    await page.goto('/');
    await dashboardPage.isPageLoaded();
    await dashboardPage.openMyInfo();
});
