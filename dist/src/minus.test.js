import { describe, expect, test } from "@jest/globals";
import { minus } from "./minus";
describe("sum module", () => {
    test("1 + 2 to equal 3", () => {
        expect(minus(3, 2)).toBe(1);
        expect(minus(1, 2)).toBe(-1);
    });
});
