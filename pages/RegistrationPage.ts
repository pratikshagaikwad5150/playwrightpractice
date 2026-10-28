import { Page, Locator } from '@playwright/test';

export interface RegistrationData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export class RegistrationPage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phone: Locator;
    readonly ssn: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.locator('#customer\\.firstName');
        this.lastName = page.locator('#customer\\.lastName');
        this.address = page.locator('#customer\\.address\\.street');
        this.city = page.locator('#customer\\.address\\.city');
        this.state = page.locator('#customer\\.address\\.state');
        this.zipCode = page.locator('#customer\\.address\\.zipCode');
        this.phone = page.locator('#customer\\.phoneNumber');
        this.ssn = page.locator('#customer\\.ssn');
        this.username = page.locator('#customer\\.username');
        this.password = page.locator('#customer\\.password');
        this.confirmPassword = page.locator('#repeatedPassword');

        this.registerButton = page.locator('input[value="Register"]');

        this.successMessage = page.locator('#rightPanel p');
    }

    async navigateToRegistration() {

        await this.page.getByRole('link', {
            name: 'Register'
        }).click();
    }

    async registerUser(user: RegistrationData) {

        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.address.fill(user.address);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        await this.zipCode.fill(user.zipCode);
        await this.phone.fill(user.phone);
        await this.ssn.fill(user.ssn);
        await this.username.fill(user.username);
        await this.password.fill(user.password);

        await this.confirmPassword.fill(user.confirmPassword);

        await this.registerButton.click();
    }
}