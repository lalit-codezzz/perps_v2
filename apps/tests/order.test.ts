import axios from "axios";
import { beforeAll, describe, it } from "bun:test";
import { BACKEND } from "./config";

describe("Order Endpoint Tests", () => {
  const user1U = "lalit";
  const user1P = "12345";
  let user1Token = "";

  const user2U = "rahul";
  const user2P = "12345";
  let user2Token = "";

  let marketId = "";

  beforeAll(async () => {
    // create a market
    const marketResponse = await axios.post(
      `${BACKEND}/api/v1/admin/market`,
      {
        slug: "SOL",
        imageUrl: "sol.png",
      },
      {
        headers: {
          Authorization: "@admin123",
        },
      },
    );

    marketId = marketResponse.data.id;

    // user 1 signup
    // await axios.post(`${BACKEND}/api/v1/auth/signup`, {
    //   username: user1U,
    //   password: user1P,
    // });

    // // user 2 signup
    // await axios.post(`${BACKEND}/api/v1/auth/signup`, {
    //   username: user2U,
    //   password: user2P,
    // });

    // // user 1 signin
    // const repsonse1 = await axios.post(`${BACKEND}/api/v1/auth/signin`, {
    //   username: user1U,
    //   password: user1P,
    // });

    // user1Token = repsonse1.data.token;

    // // user 2 signin
    // const response2 = await axios.post(`${BACKEND}/api/v1/auth/signin`, {
    //   username: user2U,
    //   password: user2P,
    // });

    // user2Token = response2.data.token;

    // // put funds in user 1 account
    // await axios.post(`${BACKEND}/api/v1/user/onramp`)

    // put funds in user 2 account 

  });

  it("First order should sit on the book with 0 filled qty", async () => {



  });

});
