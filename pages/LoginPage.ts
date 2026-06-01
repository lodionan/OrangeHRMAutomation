import {Page, expect} from '@playwright/test'
import { DashboardPage } from './DashboardPage';

export class LoginPage {

    constructor(private page: Page) {}

    async isPageLoaded() {
        await expect(this.page.getByAltText('company-branding')).toBeVisible();
    }

    async login(user: string, pass: string): Promise<DashboardPage> {        
        await this.page.getByPlaceholder('Username').fill('');
        await this.page.getByPlaceholder('Password').fill('');
        await this.page.getByRole('button', {name: 'Login'}).click();

        await this.page.waitForURL('/web/index.php/dashboard/index');
        return new DashboardPage(this.page);
    }

}
