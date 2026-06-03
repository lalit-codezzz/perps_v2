import "dotenv/config";

import { createClient, type RedisClientType} from "redis";

interface GlobalRedis {
  publisher: RedisClientType | undefined;
  subscriber: RedisClientType | undefined;
}

const globalRedis = globalThis as {} as GlobalRedis;

if (!globalRedis.publisher) {
  globalRedis.publisher = createClient();
}

if (!globalRedis.subscriber) {
  globalRedis.subscriber = createClient();
}

const pub = globalRedis.publisher as RedisClientType;
const sub = globalRedis.subscriber as RedisClientType;

export { pub, sub };
