import { updateUi, getPolarity, formatString } from '../src/client/js/updateUi';

//formatString Test
describe("Testing format string function", () => {
    test("Should take a capitalized string and return correct format", () => {
        const input = "THIS IS A TEST STRING";
        const output = "This is a test string";

        expect(formatString).toBeDefined();
        expect(formatString(input)).toEqual(output);
    });
});

//getPolarity Test
describe("Testing switch polarity case function", () => {
    test("Should take a polarity score and return a valid string", () => {
        const input = "P+";
        const output = "Very Positive";

        expect(getPolarity).toBeDefined();
        expect(getPolarity(input)).toEqual(output);
    });
});

//updateUi Test
describe("Testing updateUi function", () => {
    test("UpdateUi should be defined", () => {
        expect(updateUi).toBeDefined();
    })
})