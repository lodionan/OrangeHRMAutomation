import {test} from '../tests/pageFixtures/pageFixtures';

test('Login', async ({page, loginPage}) => {

    const user: string = process.env.USER || 'do never share users';
    const pass: string = process.env.PASS || 'do never share passwords';

    await page.goto('/web/index.php/auth/login');
    await loginPage.isPageLoaded();
    await loginPage.login(user, pass);

    await page.context().storageState({ path: '.auth/user.json'});
});
