# bun-wrangler-repro

1. Run `bun install` in root directory (monorepo)
2. Run `bun dev` in `host` directory
3. Run `bun dev` in `client` directory

Now two wrangler instances are running, the one in **client** is connecting to a Durable Object that's being served by the one in **host**.

4. Stop the wrangler instance in the `client` directory and run `bun dev-bun` instead.

This is now running `const platform = await getPlatformProxy();` which is supposed to the DO served by the host wrangler as well, but it just hangs.
