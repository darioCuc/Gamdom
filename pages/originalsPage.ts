import { Page } from '@playwright/test';
import { openGamdomLandingPage } from '../testHelpers';

export enum TopBarPages {
    ORIGINALS = 'Originals',
    CASINO = 'Casino',
    BATTLES = 'Battles',
    SPORTS = 'Sports',
    SUPPORT = 'Support',
    REWARDS = 'Rewards',
    AFFILIATES = 'Affiliates',
    PROVABLYFAIR = 'Provably Fair',
    BLOG = 'Blog'
}

// ******************************************* LOCATORS ****************************************

export const signInButton = (page: Page) =>
    page.getByTestId('signin-nav');

export const createAccountButton = (page: Page) =>
    page.getByTestId('signup-nav');
    
export const userNameInput = (page: Page) =>
    page.getByPlaceholder('Enter your username')

export const passwordInput = (page: Page) =>
    page.getByPlaceholder('Enter your password')

export const submitButton = (page: Page) =>
    page.getByTestId('start-playing-login');

export const profileAvatarImage = (page: Page) =>
    page.locator('.MuiAvatar-img');

export const walletButton = (page: Page) =>
    page.getByRole('button', { name: 'Wallet' });

export const welcomeBack = (page: Page, userName: String) =>
    page.locator('p').getByText('Welcome back ' + userName);

export const welcomeToGamdom = (page: Page) =>
    page.locator('p').getByText('Welcome to Gamdom!');

export const clearInputButton = (page: Page) =>
    page.getByLabel('clear input');

export const chatContainer = (page: Page) =>
    page.locator('#chat-messages');

export const searchBoxInput = (page: Page) =>
    page.locator('input[placeholder*="Search"]').first();

export const paymentMethodsHeader = (page: Page) =>
    page.getByText('Payment Methods', { exact: true });

export const buyCryptoButton = (page: Page) =>
    page.getByRole('button', { name: 'Buy Crypto With Credit Card' });

export const openSEOdocumentationButton = (page: Page) =>
    page.getByRole('button', { name: 'open SEO documentation' });

export const visitCasinoLink = (page: Page) =>
    page.getByRole('link', { name: 'Casino And Live Games Casino' })

export const steamButton = (page: Page) =>
    page.locator('button').filter({ hasText: 'Steam' });

export const gamdomLogoButton = (page: Page) =>
    page.getByRole('link', { name: 'Gamdom Logo' });
    
// ******************************************* HELPERS ****************************************

export async function getLoginValidations(
    page: Page, 
    username: string, 
    password: string
    ){
    await openGamdomLandingPage(page);
    await signInButton(page).click();
    await userNameInput(page).fill(username);
    await passwordInput(page).fill(password);
    await page.getByText('Password', { exact: true }).click();
}

export async function useSearchBox(page: Page, searchFor: string) {
    await searchBoxInput(page).click();
    await searchBoxInput(page).fill(searchFor);
}

export async function openCasinoPage(page: Page) {
    await visitCasinoLink(page).waitFor();
    await visitCasinoLink(page).click();
}

export async function buyCryptoWithCreditCard(page: Page) {
    await buyCryptoButton(page).click();
    await page.waitForSelector('h6:has-text("Create New Account")');
}

export async function openTopBarPage(page: Page, pageName: TopBarPages) {
    switch (pageName) {
        case TopBarPages.REWARDS:
        case TopBarPages.AFFILIATES:
        case TopBarPages.PROVABLYFAIR:
            await page.getByRole('banner').getByRole('link', { name: pageName }).click();
            await page.waitForLoadState('domcontentloaded');
            break;
        case TopBarPages.BATTLES:
            await page.getByRole('banner').getByRole('link', { name: pageName, exact: true }).first().click();
            await page.waitForLoadState('domcontentloaded');
            break;
        case TopBarPages.CASINO:
        case TopBarPages.SPORTS:
        case TopBarPages.SUPPORT:
            await page.getByRole('banner').getByRole('link', { name: pageName }).first().click();
            await page.waitForLoadState('domcontentloaded');
            break;
        default:
            await page.getByRole('link', { name: pageName }).click();
            await page.waitForLoadState('domcontentloaded');
            break;
    }
}

export async function clickOnGamdomLogo(page: Page) {
    await page.waitForLoadState();
    await gamdomLogoButton(page).click();
}