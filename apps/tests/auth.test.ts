import { describe, expect, it } from "bun:test";
import { BACKEND } from "./config";
import axios, { AxiosError } from "axios";

describe("User Signup Endpoint Tests", () => {
  const username = `lalit ${Math.random()}`;

  it("should fail if username is not given!", async () => {
    try {
      await axios.post(`${BACKEND}/api/v1/auth/signup`, {
        password: "12345",
      });
    } catch (error) {
      const err = error as AxiosError;
      expect(err?.response?.status).toBe(400);
    }
  });

  it("should fail if password is not given!", async () => {
    try {
      await axios.post(`${BACKEND}/api/v1/auth/signup`, {
        username,
      });
    } catch (error) {
      const err = error as AxiosError;
      expect(err.response?.status).toBe(400);
    }
  });

  it("should fail if duplicate username is given!", async () => {
    try {
      await axios.post(`${BACKEND}/api/v1/auth/signup`, {
        username: "lalit",
        password: "12345",
      });
    } catch (error) {
      const err = error as AxiosError;
      expect(err.response?.status).toBe(409);
    }
  });

  it("should pass if username and password both are given!", async () => {
    try {
      const response = await axios.post(`${BACKEND}/api/v1/auth/signup`, {
        username,
        password: "12345",
      });
      expect(response.status).toBe(201);
    } catch (error) {
      expect().fail();
    }
  });
});

describe("User Signin Endpoint Tests", () => {
  const username = "lalit";

  it("should fail if username is not given!", async () => {
    try {
      await axios.post(`${BACKEND}/api/v1/auth/signin`, {
        password: "12345",
      });
    } catch (error) {
      const err = error as AxiosError;
      expect(err?.response?.status).toBe(400);
    }
  });

  it("should fail if password is not given!", async () => {
    try {
      await axios.post(`${BACKEND}/api/v1/auth/signin`, {
        username,
      });
    } catch (error) {
      const err = error as AxiosError;
      expect(err.response?.status).toBe(400);
    }
  });

  it("should fail if username is not found!", async () => {
    try {
      await axios.post(`${BACKEND}/api/v1/auth/signin`, {
        username: "abcxyz",
        password: "12345",
      });
    } catch (error) {
      const err = error as AxiosError;
      expect(err.response?.status).toBe(404);
    }
  });

  it("should pass if username and password both are matched!", async () => {
    try {
      const response = await axios.post(`${BACKEND}/api/v1/auth/signin`, {
        username,
        password: "12345",
      });
      expect(response.status).toBe(200);
      expect(response.data.token).not.toBe(undefined);
    } catch (error) {
      const err = error as AxiosError;
      expect(err.response?.status).toBe(409);
    }
  });
});
