import {Page, expect} from '@playwright/test';

export class ProfilePage {
    
    constructor(private page: Page) {}

    async isPageLoaded() {
        await expect(this.page.getByRole('button', {name: 'Add'})).toBeEnabled();
    }

    async attachInvoice() {
        
    }
}