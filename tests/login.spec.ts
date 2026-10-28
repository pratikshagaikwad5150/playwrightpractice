import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginTestData } from '../test-data/testData';

test.describe('ParaBank Login Tests', () => {

    test('Verify successful login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            loginTestData.validUsername,
            loginTestData.validPassword
        );

        await expect(page).toHaveTitle(/ParaBank/);

        await expect(
            page.locator('text=Accounts Overview')
        ).toBeVisible();
    });
});