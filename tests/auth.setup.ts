import {test} from '../tests/pageFixtures/pageFixtures';

test('Login', async ({page, loginPage}) => {
    await page.goto('/web/index.php/auth/login');
    await loginPage.isPageLoaded();
    await loginPage.login('Admin', 'admin123');

    await page.context().storageState({ path: '.auth/user.json'});
});
