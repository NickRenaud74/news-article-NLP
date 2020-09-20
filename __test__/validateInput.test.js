import { validateInput } from "../src/client/js/validateInput";


describe("Testing form validation function with valid input", () => {

    test('Should check that there is valid text as an input', () => {
        const input = 'This is a test string';
        const output = true;

        expect(validateInput(input)).toEqual(output);
    });

});

describe("Testing form validation with improper input", () => {
    test('Should return false if no input is provided', () => {
        const input = '';
        const output = false;

        expect(validateInput(input)).toEqual(output);
    });
});