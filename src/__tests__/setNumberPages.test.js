import { setNumberPages } from "../setNumberPages";

describe("setNumberPages", () => {
  it("should return 1 when total is 1 and max is 1", () => {
    expect(setNumberPages({ total: 1, max: 1 })).toBe(1);
  });

  it("should return 1 when total is 1 and max is 2", () => {
    expect(setNumberPages({ total: 1, max: 2 })).toBe(1);
  });

  it("should return 1 when total is 2 and max is 1", () => {
    expect(setNumberPages({ total: 2, max: 1 })).toBe(1);
  });

  it("should return 1 when total is 2 and max is 2", () => {
    expect(setNumberPages({ total: 2, max: 2 })).toBe(1);
  });
});
