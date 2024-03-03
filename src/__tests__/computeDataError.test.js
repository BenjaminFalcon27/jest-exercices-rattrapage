import { computeDataError } from "../computeDataError";
import { setResponseError } from "../setResponseError";

jest.mock("../setResponseError");

describe("computeDataError", () => {
  const response = {
    json: jest.fn(() => Promise.resolve({})),
    status: 200,
  };

  it("should call setResponseError with response data", async () => {
    await computeDataError(response);
    expect(setResponseError).toHaveBeenCalledWith({
      response: { status: 200 },
    });
  });

  it("should call setResponseError with anomaly label", async () => {
    response.json.mockImplementationOnce(() => {
      throw new Error();
    });
    await computeDataError(response);
    expect(setResponseError).toHaveBeenCalledWith({
      response: {
        anomaly: { label: "Succès: La requête a réussi" },
        status: 200,
      },
    });
  });
});
