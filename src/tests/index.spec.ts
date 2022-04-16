import request from "supertest";
import { app } from "../app";

describe("GET /", () => {
  it("should return status code 200", () => {
    return request(app).get("/").expect(200);
  });
});

describe("GET /:id", () => {
  it("should return status code 200", () => {
    return request(app).get("/1").expect(200);
  });
});

describe("POST /", () => {
  it("should return status code 200 if a description is provided", () => {
    return request(app)
      .post("/")
      .send({ desc: "Test description" })
      .expect(200);
  });
});

describe("POST /", () => {
  it("should return status code 400 if a description is not provided", () => {
    return request(app).post("/").expect(400);
  });
});

describe("PUT /:id", () => {
  it("should return status code 200", () => {
    return request(app).put("/1").expect(200);
  });
});

describe("DELETE /:id", () => {
  it("should return status code 200", () => {
    return request(app).delete("/1").expect(200);
  });
});

describe("Invalid route", () => {
  it("should return status code 404", () => {
    return request(app).get("/invalid/route").expect(404);
  });
});
