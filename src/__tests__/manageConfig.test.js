import manageConfig from "../manageConfig";

describe("manageConfig", () => {
  const fetchAuthConfig = {
    headers: {
      Authorization: "Bearer token",
    },
    method: "GET",
  };

  it("should return fetchAuthConfig for BASE API", () => {
    const apiName = "base";
    const result = manageConfig(apiName, fetchAuthConfig);
    expect(result).toEqual(fetchAuthConfig);
  });

  it("should return fetchAuthConfig without headers for non-BASE API", () => {
    const apiName = "github";
    const result = manageConfig(apiName, fetchAuthConfig);
    expect(result).toEqual({ method: "GET" });
  });
});
