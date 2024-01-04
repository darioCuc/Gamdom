import { Page } from '@playwright/test';
import { baseURL } from '../playwright.config';

// ******************************************* LOCATORS ****************************************

export const lobbyImage = (page: Page) =>
    page.getByRole('img', { name: 'Lobby', exact: true });

export const lobbyTab = (page: Page) =>
    page.getByRole('tab', { name: 'Lobby' });

export const searchBoxInput = (page: Page) =>
    page.locator('.MuiInputBase-root').first().locator('input');

export const casinoTab = (page: Page, tabName: string) =>
    page.getByRole('tab', { name: tabName })

// ******************************************* HELPERS ****************************************


export async function gotoCasinoPage(page: Page) {
    await page.goto(baseURL + 'casino');
    await page.waitForLoadState('domcontentloaded');
}

export async function useCasinoSearchBox(page: Page, searchFor: string) {
    await searchBoxInput(page).click();
    await searchBoxInput(page).fill(searchFor);
}

export async function openCasinoTab(page: Page, tabName: string) {
    await casinoTab(page, tabName).click();
}