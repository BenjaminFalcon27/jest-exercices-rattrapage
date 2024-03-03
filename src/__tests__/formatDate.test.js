import { isValidDate, formatDate, setDate } from "../formatDate";

describe("formatDate", () => {
  describe("isValidDate", () => {
    it("should return false when date is null", () => {
      expect(isValidDate(null)).toBe(false);
    });

    it("should return false when date is undefined", () => {
      expect(isValidDate(undefined)).toBe(false);
    });

    it("should return false when date is a string", () => {
      expect(isValidDate("")).toBe(false);
    });

    it("should return true when date is a valid date", () => {
      expect(isValidDate("01/01/1970")).toBe(true);
    });
  });

  describe("formatDate", () => {
    it("should return an empty string when date is an empty string", () => {
      expect(formatDate("")).toBe("");
    });

    it("should return a formatted date when date is valid", () => {
      expect(formatDate("01/01/1970")).toBe("01/01/1970");
    });
  });

  describe("setDate", () => {
    it("should return an empty string when date is not valid", () => {
      expect(setDate({ date: "" })).toBe("");
    });

    it("should return a formatted date when date is valid", () => {
      expect(setDate({ date: "01/01/1970" })).toBe("01/01/1970");
    });
  });
});
