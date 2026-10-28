import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { generateUniqueUser } from '../test-data/testData';

test.describe('ParaBank Registration', () => {

    test('Register new user successfully', async ({ page }) => {

        const userData = generateUniqueUser();

        const registrationPage = new RegistrationPage(page);

        // 1. Launch ParaBank
        await page.goto('/');

        // 2. Navigate to Registration page
        await registrationPage.navigateToRegistration();

        // 3. Fill registration form and submit
        await registrationPage.registerUser(userData);

        // 4. Verify successful registration
        await expect(registrationPage.successMessage)
            .toHaveText('Your account was created successfully. You are now logged in.');
    });
});