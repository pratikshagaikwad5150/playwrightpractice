import { RegistrationData } from '../pages/RegistrationPage';

export function generateUniqueUser(): RegistrationData {

    const timestamp = Date.now();

    return {
        firstName: 'Pratiksha',
        lastName: 'Test',
        address: 'Pune',
        city: 'Pune',
        state: 'Maharashtra',
        zipCode: '411057',
        phone: '9876543210',
        ssn: '123456789',

        username: `user${timestamp}`,

        password: 'Test@12345',

        confirmPassword: 'Test@12345'
    };
}