import { Page, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export class ProfilePage {

    tempFilePath = path.join(__dirname, 'simplefile.pdf');

    constructor(private page: Page) { }

    async isPageLoaded() {
        await expect(this.page.locator('div.orangehrm-edit-employee-image')).toBeVisible();
    }

    async attachInvoice() {
        await this.page.locator('button.oxd-button.oxd-button--medium.oxd-button--text')
            .scrollIntoViewIfNeeded();
        await this.page.locator('button.oxd-button.oxd-button--medium.oxd-button--text')
            .click();
        await expect(this.page.locator('//input[@type="file"]')).toBeInViewport();

        try {
            // Write some content to the file so it is not 0 bytes.
            fs.writeFileSync(this.tempFilePath, 'dummy invoice content');
            console.log('File successfully created');
        } catch (error: any) {
            console.log(`Error type: ${error.name} received, please take a look`);
            console.log(`Error message is: ${error.message}.`);
        };

        const attachmentInput = this.page.locator('.orangehrm-attachment input.oxd-file-input');
        await attachmentInput.setInputFiles(this.tempFilePath);

        await expect(this.page.locator('.orangehrm-attachment .oxd-file-input-div'))
            .toContainText('simplefile.pdf');

        try {
            if (fs.existsSync(this.tempFilePath)) {
                fs.unlinkSync(this.tempFilePath);
                console.log('Temp file deleted successfully');
            }
        } catch (error: any) {
            console.log(`Error type: ${error.name} received, please take a look`);
            console.log(`Error message is: ${error.message}.`);
        };

    };

    async submitAttachedFile() {
        await this.page.getByRole('button', { name: 'submit' });
    }

    async wasFileAttachedCorrectly() {
        await expect(this.page.locator('div#oxd-toaster_1')).toBeEnabled();
    }
}