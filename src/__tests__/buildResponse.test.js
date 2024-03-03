import { buildResponse } from "../buildResponse";

describe("buildResponse", () => {
  it("should return response.json() when status is 200", async () => {
    const response = {
      status: 200,
      json: jest.fn().mockResolvedValue({ data: "data" }),
    };
    const config = {};
    const result = await buildResponse(response, config);
    expect(result).toEqual({ data: "data", statusHttp: 200 });
  });

  it("should return response.blob() when config.blob is true", async () => {
    const response = {
      status: 200,
      blob: jest.fn().mockResolvedValue("blob"),
    };
    const config = { blob: true };
    const result = await buildResponse(response, config);
    expect(result).toEqual("blob");
  });

  it("should return response.text() when config.text is true", async () => {
    const response = {
      status: 200,
      text: jest.fn().mockResolvedValue("text"),
    };
    const config = { text: true };
    const result = await buildResponse(response, config);
    expect(result).toEqual("text");
  });

  it("should throw error when status is 400", async () => {
    const response = {
      status: 400,
      json: jest.fn().mockResolvedValue({ data: "data" }),
    };
    const config = {};
    try {
      await buildResponse(response, config);
    } catch (error) {
      expect(error.label).toEqual(
        "Erreur: La syntaxe de la requête est erronée"
      );
      expect(error.iconName).toEqual("alert");
      expect(error.detail).toEqual("");
      expect(error.type).toEqual("danger");
    }
  });

  it("should throw error when status is 401", async () => {
    const response = {
      status: 401,
      json: jest.fn().mockResolvedValue({ data: "data" }),
    };
    const config = {};
    try {
      await buildResponse(response, config);
    } catch (error) {
      expect(error.label).toEqual(
        "Erreur: Une authentification est nécessaire pour accéder à la ressource"
      );
      expect(error.iconName).toEqual("alert");
      expect(error.detail).toEqual("");
      expect(error.type).toEqual("danger");
    }
  });

  it("should throw error when status is 500", async () => {
    const response = {
      status: 500,
      json: jest.fn().mockResolvedValue({ data: "data" }),
    };
    const config = {};
    try {
      await buildResponse(response, config);
    } catch (error) {
      expect(error).toEqual({
        detail: "",
        label: "Erreur: Problème technique ! Contacter votre support",
      });
    }
  });

  it("should return statusHttp when status is 300", async () => {
    const response = {
      status: 300,
    };
    const config = {};
    const result = await buildResponse(response, config);
    expect(result).toEqual({ statusHttp: 300 });
  });
});
