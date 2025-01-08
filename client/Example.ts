import { DurableObject } from "cloudflare:workers";

export class Example extends DurableObject {
  constructor(state: DurableObjectState, env: Env) {
    super(state, env);
    console.log("Durable Object");
  }

  async sayHello(): Promise<string> {
    return "Hello, World!";
  }
}
