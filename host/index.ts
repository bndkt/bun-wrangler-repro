import { getPlatformProxy } from "wrangler";

const platform = await getPlatformProxy({
  environment: "client",
});

console.log("platform", platform.env);
