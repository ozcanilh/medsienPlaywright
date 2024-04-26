import { test, expect, Page} from '@playwright/test';
import {LoginPage} from "../pages/login";
import PageData = require("../../data/pageData");

test.describe('Login Scenarios', () => {
    let page: Page
    test.beforeEach(async ({browser})=>{
        page = await browser.newPage();
    })
    test.afterEach(async ({})=>{
        await page.close();
    })
    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(PageData.PageUrl.login);
        await loginPage.fillUsernameInput('standard_user');
        await loginPage.fillPasswordInput('secret_sauce')
        await loginPage.clickLoginButton()
        await loginPage.page.waitForURL('**/inventory.html')
    });

    test('Login with invalid username', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(PageData.PageUrl.login);
        await loginPage.fillUsernameInput('standard_user_test');
        await loginPage.fillPasswordInput('secret_sauce')
        await loginPage.clickLoginButton()
        await loginPage.isErrorMessageContainerContainText('Username and password do not match any user in this service')
    });

    test('Login with invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(PageData.PageUrl.login);
        await loginPage.fillUsernameInput('standard_user');
        await loginPage.fillPasswordInput('secret_sauce_test')
        await loginPage.clickLoginButton()
        await loginPage.isErrorMessageContainerContainText('Username and password do not match any user in this service')
    });

    test('Login with invalid username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(PageData.PageUrl.login);
        await loginPage.fillUsernameInput('standard_user_test');
        await loginPage.fillPasswordInput('secret_sauce_test')
        await loginPage.clickLoginButton()
        await loginPage.isErrorMessageContainerContainText('Username and password do not match any user in this service')
    });
})

