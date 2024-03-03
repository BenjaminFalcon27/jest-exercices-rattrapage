import setConfirmClassModifier from "../setConfirmClassModifier";

describe("setConfirmClassModifier", () => {
  it('should return "confirm success" when hasErrors is false', () => {
    expect(setConfirmClassModifier(false)).toBe("confirm success");
  });

  it('should return "confirm disabled" when hasErrors is true', () => {
    expect(setConfirmClassModifier(true)).toBe("confirm disabled");
  });

  it('should return "confirm success" when hasErrors is false and classModifier is "confirm"', () => {
    expect(setConfirmClassModifier(false, "confirm")).toBe("confirm success");
  });

  it('should return "confirm disabled" when hasErrors is true and classModifier is "confirm"', () => {
    expect(setConfirmClassModifier(true, "confirm")).toBe("confirm disabled");
  });

  it('should return "submit success" when hasErrors is false and classModifier is "submit"', () => {
    expect(setConfirmClassModifier(false, "submit")).toBe("submit success");
  });

  it('should return "submit disabled" when hasErrors is true and classModifier is "submit"', () => {
    expect(setConfirmClassModifier(true, "submit")).toBe("submit disabled");
  });
});
