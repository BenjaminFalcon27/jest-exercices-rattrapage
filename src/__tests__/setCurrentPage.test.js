import { setCurrentPage } from "../setCurrentPage";

describe("setCurrentPage", () => {
  it("should return 1 when max is 0", () => {
    expect(setCurrentPage({ max: 0, skip: 0 })).toBe(1);
  });

  it("should return 1 when skip is 0", () => {
    expect(setCurrentPage({ max: 1, skip: 0 })).toBe(1);
  });

  it("should return 1 when max is 1", () => {
    expect(setCurrentPage({ max: 1, skip: 1 })).toBe(1);
  });

  it("should return 2 when max is 1 and skip is 2", () => {
    expect(setCurrentPage({ max: 1, skip: 2 })).toBe(2);
  });

  it("should return 2 when max is 2 and skip is 3", () => {
    expect(setCurrentPage({ max: 2, skip: 3 })).toBe(2);
  });
});
