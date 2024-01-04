import { expect, Page } from '@playwright/test';
import * as originals from './pages/originalsPage'

export const Users = {
        username: 'cuc369',
        password: 'GramGram!369',
};

export async function clearCookies(page: Page) {
    await page.context().clearCookies();
}

export async function openGamdomLandingPage(page: Page) {
    await clearCookies(page); 
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect(originals.welcomeToGamdom(page)).toBeVisible();
    await clearPopupDialog(page);
}

export async function performLogin(
    page: Page, 
    username = Users.username, 
    password = Users.password
    ){
    await openGamdomLandingPage(page);
    await originals.signInButton(page).click();
    await originals.userNameInput(page).fill(username);
    await originals.passwordInput(page).fill(password);
    await originals.submitButton(page).click();
}

export async function clearPopupDialog(page: Page) {
    await page.waitForLoadState('domcontentloaded');
    const popupDialogLocator = page.locator('#onesignal-slidedown-dialog');
    if (await popupDialogLocator.isVisible()) {
        await page.getByRole('button', { name: 'No, thanks' }).click();
    }
}
