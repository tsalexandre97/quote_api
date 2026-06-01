const request = require("supertest");
const app = require("../src/app");

describe("GET /quote", () => {
  it("deve retornar status 200", async () => {
    const response = await request(app).get("/quote");

    expect(response.statusCode).toBe(200);
  });
});