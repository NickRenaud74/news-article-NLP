import { postData, handleSubmit } from '../src/client/js/formHandler';

//postData Test
describe("Testing post request function", () => {
    test("Testing post request", async() => {
        expect(postData).toBeDefined();
    });
});

//handleSubmit Test
describe("Testing handle submit function", () => {
    test("Testing handle submit", () => {
        expect(handleSubmit).toBeDefined();
    });
});