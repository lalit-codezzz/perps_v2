import type { ToEngine } from "shared";
import { pub } from "../configs/redis";

pub.connect();

async function loopback (message: ToEngine) {
    return new Promise((resolve, reject) => {

        const loopbackId = Math.random().toString();

        pub.xAdd("engine", "*", {loopbackId, ...message});

    });
}

export default loopback;