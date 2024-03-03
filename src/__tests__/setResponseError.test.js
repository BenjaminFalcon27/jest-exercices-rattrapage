import {
  STATUS_HTTP,
  STATUS_API,
  STATUS_HTTP_MESSAGES,
  setResponseError,
} from "../setResponseError";

describe("setResponseError function", () => {
  it("should return a warning response object", () => {
    const response = {
      anomaly: {
        label: "Custom Warning",
        detail: "Custom Warning Detail",
      },
      status: STATUS_API.WARNING * 10 + 1,
    };
    const expectedResponse = {
      ...response.anomaly,
      type: "danger",
      iconName: "alert",
    };
    expect(setResponseError({ response })).toEqual(expectedResponse);
  });

  it("should return an error response object", () => {
    const response = {
      anomaly: {
        label: "Custom Error",
        detail: "Custom Error Detail",
      },
      status: STATUS_API.ERROR * 10 + 1,
    };
    const expectedResponse = {
      ...response.anomaly,
    };
    expect(setResponseError({ response })).toEqual(expectedResponse);
  });

  it("should return an empty object for other status codes", () => {
    const response = {
      anomaly: {
        label: "Custom Label",
        detail: "Custom Detail",
      },
      status: STATUS_HTTP.SUCCESS,
    };
    expect(setResponseError({ response })).toEqual({});
  });
});

describe("STATUS_HTTP_MESSAGES object", () => {
  it("should have a message for each HTTP status code", () => {
    Object.values(STATUS_HTTP).forEach((status) => {
      expect(STATUS_HTTP_MESSAGES[status]).toBeDefined();
    });
  });
});
