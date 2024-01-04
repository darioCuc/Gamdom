import { test, expect } from '@playwright/test';
import * as casino from '../pages/casinoPage';

test.describe('Gamdom Casino page tests', () => {
    test('User can use Casino search bar to find games', async ({ page }) => {
        const searchFor = "Tailgating";
        await casino.gotoCasinoPage(page);
        await casino.useCasinoSearchBox(page, searchFor);
        await expect(page.getByRole('option', { name: searchFor })).toBeVisible();
    });

    test('User can open Casino tabs', async ({ page }) => {
        await casino.gotoCasinoPage(page);

        // Check Favorite tab
        await casino.openCasinoTab(page, "Favorite");
        await expect(page).toHaveURL(new RegExp('.*casino.*' && `.*favorite.*`));

        // Check Slots tab
        await casino.openCasinoTab(page, "Slots");
        await expect(page).toHaveURL(new RegExp('.*casino.*' && `.*slots.*`));

        // Check Live Games tab
        await casino.openCasinoTab(page, "Live Games");
        await expect(page).toHaveURL(new RegExp('.*casino.*' && `.*live-games.*`));

        // Check Table Games tab
        await casino.openCasinoTab(page, "Table Games");
        await expect(page).toHaveURL(new RegExp('.*casino.*' && `.*table-games.*`));
    });
});