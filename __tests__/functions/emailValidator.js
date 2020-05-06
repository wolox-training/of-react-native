import { validateEmail } from '@screens/LoginScreen/utils';

describe('validate Password', () => {
 test('invalid password', () => {
   expect(validateEmail('olifergmailcom')).toBe(false);
 });
 test('valid password', () => {
   expect(validateEmail('olifer@gmail.com')).toBe(true);
 });
});
