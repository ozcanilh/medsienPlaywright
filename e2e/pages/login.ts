import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessageContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.getByText("Login")
        this.errorMessageContainer = page.getByTestId('error')
    }

    async goto(home: any) {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async fillUsernameInput(value: string){
        await this.usernameInput.fill(value)
    }

    async fillPasswordInput(value: string){
        await this.passwordInput.fill(value)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }

    async isErrorMessageContainerContainText(text: string){
        await expect(this.errorMessageContainer).toContainText(text)
    }
}
