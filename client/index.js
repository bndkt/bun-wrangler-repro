import { getPlatformProxy } from "wrangler";

const platform = await getPlatformProxy();

console.log("platform", platform.env);
