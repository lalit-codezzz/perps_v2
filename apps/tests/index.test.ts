import { describe, expect, it } from "bun:test";
import { BACKEND } from "./config";
import axios from "axios";

describe("User signup endpoint", () => {
  const username = `lalit ${Math.random()}`;

  it("should fail if username is not given", async () => {
    try {
      const response = await axios.post(`${BACKEND}/api/v1/signup`, {
        password: "12345",
      });
      const data = response.data;
      expect(data.statusCode).toBe(400);
    } catch (error) {}
  });

  it("should pass if username and password both are given", async () => {
    const response = await axios.post(`${BACKEND}/api/v1/signup`, {
      username,
      password: "12345",
    });

    expect(response.data.statusCode).toBe(201);
  });
});
