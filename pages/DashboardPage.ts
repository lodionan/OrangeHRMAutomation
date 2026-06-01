import {Page, expect} from '@playwright/test';
import{ProfilePage} from './ProfilePage';

export class DashboardPage {

    constructor(private page: Page) {}

    async isPageLoaded() {
        await expect(this.page.locator('h6.oxd-text')).toBeVisible();
    };

    async openMyInfo(): Promise<ProfilePage> {
        await this.page.locator('li:nth-child(6) > a').click();
        await this.page.waitForURL('/web/index.php/pim/viewPersonalDetails/empNumber/7');
        return new ProfilePage(this.page);
    };

}