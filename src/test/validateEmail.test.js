import { validateEmail } from "../components/List";

test("Expect to get false", () => {

    expect(validateEmail("test")).toBe(false);

});