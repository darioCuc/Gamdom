import { test, expect } from '@playwright/test';
import { performLogin, Users } from '../testHelpers';
import * as originals from '../pages/originalsPage';

test.describe('Gamdom Login Test', () => {
    // Skipping this test due to CAPTCHA validation
    test.skip('User can log in as existing user', async ({ page }) => {
        await performLogin(page);

        // Assert we are logged in by checking expected elements on the page
        await expect(originals.profileAvatarImage(page)).toBeVisible();
        await expect(originals.walletButton(page)).toBeVisible();
        await expect(originals.welcomeBack(page, Users.username)).toBeVisible();
    });

    test('Login form has validations', async ({ page }) => {
        // We are entering a username and password that are not abiding by the expected input lenght standards
        await originals.getLoginValidations(page, "abc", "1234");

        // Verify the presence of exactly 2 clear input buttons
        await expect(originals.clearInputButton(page)).toHaveCount(2);
        
        // We are checking if the submit button remains disabled 
        await expect(originals.submitButton(page)).toBeDisabled();
    });
});
