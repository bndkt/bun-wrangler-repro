export { Example } from "./Example";

// Worker
export default {
  async fetch(request, env, ctx): Promise<Response> {
    // Every unique ID refers to an individual instance of the Durable Object class
    const id = env.EXAMPLE_DO.idFromName("foo");

    // A stub is a client used to invoke methods on the Durable Object
    const stub = env.EXAMPLE_DO.get(id);

    // Methods on the Durable Object are invoked via the stub
    const rpcResponse = await stub.sayHello();

    return new Response(rpcResponse);
  },
} satisfies ExportedHandler<Env>;
