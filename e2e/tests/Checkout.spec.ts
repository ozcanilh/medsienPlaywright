import {test, expect, Page} from '@playwright/test';
import {LoginPage} from "../pages/login";
import {InventoryPage} from "../pages/inventory";
import PageData = require("../../data/pageData");

test.describe('Checkout Scenarios', () => {
    let page: Page
    test.beforeEach(async ({browser})=>{
        page = await browser.newPage();
    })
    test.afterEach(async ({})=>{
        await page.close();
    })
    test('Add 2 item to shopping cart and checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page)
        await loginPage.goto(PageData.PageUrl.login);
        await loginPage.fillUsernameInput('standard_user');
        await loginPage.fillPasswordInput('secret_sauce')
        await loginPage.clickLoginButton()
        await inventoryPage.addInventoryItemToCart('Sauce Labs Backpack')
        await inventoryPage.addInventoryItemToCart('Sauce Labs Bike Light')
        await inventoryPage.addInventoryItemToCart('Sauce Labs Bolt T-Shirt')
        // Click shopping cart button
        await inventoryPage.clickShoppingChartButton()
        // Click checkout button
        await inventoryPage.clickCheckoutButton()
        // Fill firstname input
        // Fill lastname input
        // Fill postal code input
        await inventoryPage.fillCheckoutInformation('username', "lastName", "06000");
        // Click continue button
        await inventoryPage.clickContinueButton()
        // Click finish button
        await inventoryPage.clickFinishButton()
        // Click finish button
        await inventoryPage.isCheckoutCompleteContainerContainText("Thank you for your order")
    });
})

