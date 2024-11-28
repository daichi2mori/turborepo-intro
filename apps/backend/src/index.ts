import { Hono } from "hono";
import { add } from "@turborepo-intro/math";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono");
});

app.get("/math/add", (c) => {
  const a = 5;
  const b = 7;
  const result = add(a, b);
  return c.text(`result: ${result}`);
});

export default app;
