import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryList: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly shoppingCartButton: Locator;
    readonly checkoutButton: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly checkoutCompleteContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryList = page.getByTestId("inventory-list").locator("div")
        this.firstNameInput = page.getByPlaceholder("First Name");
        this.lastNameInput = page.getByPlaceholder("Last Name");
        this.postalCodeInput = page.getByPlaceholder("Zip/Postal Code");
        this.shoppingCartButton = page.getByTestId("shopping-cart-badge");
        this.checkoutButton = page.getByTestId("checkout");
        this.continueButton = page.getByTestId("continue");
        this.finishButton = page.getByTestId("finish");
        this.checkoutCompleteContainer = page.getByTestId("checkout-complete-container")
    }

    async addInventoryItemToCart(name: string){
        await this.inventoryList.filter({ hasText: name }).nth(1).getByText("Add to cart").click();
    }
    // clickShoppingCartButton
    async clickShoppingChartButton(){
        await this.shoppingCartButton.click();
    }
    // clickCheckoutButton
    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }
    // fillFirstNameInput
    // fillLastNameInput
    // fillPostalCodeInput
    async fillCheckoutInformation(name: string, lastname: string, postCode: string){
        await this.firstNameInput.fill(name)
        await this.lastNameInput.fill(lastname)
        await this.postalCodeInput.fill(postCode)
    }
    // clickContinueButton
    async clickContinueButton(){
        await this.continueButton.click();
    }
    // clickFinishButton
    async clickFinishButton(){
        await this.finishButton.click();
    }
    async isCheckoutCompleteContainerContainText(text: string){
        await expect(this.checkoutCompleteContainer).toContainText(text)
    }
}
