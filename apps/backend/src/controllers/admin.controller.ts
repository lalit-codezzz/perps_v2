import { prisma } from "db/client";
import type { Request, Response } from "express";
// import { pub } from "../configs/redis";
import loopback from "../utils/loopback";

async function createMarketController(req: Request, res: Response) {
  const { slug, imageUrl } = req.body;

  if (!slug) {
    return res.status(400).json({
      success: false,
      message: "Market slug is required!",
    });
  }

  try {
    const market = await prisma.market.create({
      data: {
        slug,
        image_url: imageUrl,
      },
    });

    loopback({ messageType: "create_market", marketId: market.id });

    return res.status(201).json({
      success: true,
      id: market.id,
      message: "Market created!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
}

export { createMarketController };
