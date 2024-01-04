import { test, expect } from '@playwright/test';
import { openGamdomLandingPage, clearPopupDialog } from '../testHelpers';
import * as landing from '../pages/originalsPage';
import * as casino from '../pages/casinoPage';

test.describe('Gamdom Originals page tests', () => {
    test('Check unsigned users Gamdon Originals page view', async ({ page }) => {
        await openGamdomLandingPage(page);
        await page.waitForLoadState('domcontentloaded');

        await expect(landing.signInButton(page)).toBeVisible();
        await expect(landing.createAccountButton(page)).toBeVisible();
        await expect(landing.welcomeToGamdom(page)).toBeVisible();
        await expect(landing.searchBoxInput(page)).toBeVisible();
        await expect(landing.paymentMethodsHeader(page)).toBeVisible();
        await expect(landing.buyCryptoButton(page)).toBeVisible();
        await expect(landing.openSEOdocumentationButton(page)).toBeVisible();
        // await expect(landing.chatContainer(page)).toBeVisible({ timeout: 20000 });
        // A lot more can be added here to check the presence of other elements...
    });

    test('User can use search bar to find games', async ({ page }) => {
        const searchFor = "Tailgating";
        await openGamdomLandingPage(page);

        await landing.useSearchBox(page, searchFor);
        await expect(page.getByRole('option', { name: searchFor })).toBeVisible();
    });

    test('User can open Casino page from landing page', async ({ page }) => {
        await openGamdomLandingPage(page);

        await landing.openCasinoPage(page);
        await page.waitForLoadState('domcontentloaded');
        await expect(casino.lobbyImage(page)).toBeVisible();
        await expect(casino.lobbyTab(page)).toBeVisible();
    });

    test('User clicking on Buy Crypto button will open Sign in modal', async ({ page }) => {
        await openGamdomLandingPage(page);

        await landing.buyCryptoWithCreditCard(page);
        await expect(landing.steamButton(page)).toBeVisible();
        await expect(landing.userNameInput(page)).toBeVisible();
        await expect(landing.passwordInput(page)).toBeVisible();
    });

    test('User can open topbar subpages', async ({ page }) => {
        await openGamdomLandingPage(page);

        await landing.clickOnGamdomLogo(page);
        await landing.openTopBarPage(page, landing.TopBarPages.ORIGINALS);
        await clearPopupDialog(page);

        await landing.openTopBarPage(page, landing.TopBarPages.SUPPORT);
        await expect(page).toHaveURL(new RegExp('.*help.*' && `.*support.*`));
        await landing.clickOnGamdomLogo(page);

        await landing.openTopBarPage(page, landing.TopBarPages.REWARDS);
        await expect(page).toHaveURL(new RegExp('.*rewards.*'));
        await landing.clickOnGamdomLogo(page);

        await landing.openTopBarPage(page, landing.TopBarPages.BLOG);
        await expect(page).toHaveURL(new RegExp('.*blog.*'));
        await landing.clickOnGamdomLogo(page);

        await landing.openTopBarPage(page, landing.TopBarPages.PROVABLYFAIR);
        await expect(page).toHaveURL(new RegExp('.*help.*' && `.*fair.*`));
        await landing.clickOnGamdomLogo(page);

        await landing.openTopBarPage(page, landing.TopBarPages.SPORTS);
        await expect(page).toHaveURL(new RegExp('.*esports.*'));
        await landing.clickOnGamdomLogo(page);

        await landing.openTopBarPage(page, landing.TopBarPages.BATTLES);
        await expect(page).toHaveURL(new RegExp('.*slots-battles.*'));
        await landing.clickOnGamdomLogo(page);

        await landing.openTopBarPage(page, landing.TopBarPages.CASINO);
        await expect(page).toHaveURL(new RegExp('.*casino.*'));
        await landing.clickOnGamdomLogo(page);

        await landing.openTopBarPage(page, landing.TopBarPages.AFFILIATES);
        await expect(page).toHaveURL(new RegExp('.*rewards.*'));
        await landing.clickOnGamdomLogo(page);

    });
});