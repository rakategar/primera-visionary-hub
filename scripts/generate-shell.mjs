import { writeFileSync } from "node:fs";
import { join } from "node:path";

const shellPath = join(process.cwd(), "dist/client/_shell.html");

async function generateFromServer() {
  // Import server bundle yang dihasilkan TanStack Start
  const mod = await import("../dist/server/server.js");
  const handler = mod.default ?? mod;

  const req = new Request("http://localhost:3000/");

  let res;
  if (typeof handler?.fetch === "function") {
    res = await handler.fetch(req, {});
  } else if (typeof handler === "function") {
    res = await handler(req, {});
  } else {
    throw new Error("Cannot find fetch handler in server bundle");
  }

  const html = await res.text();
  if (!html.includes("<html")) throw new Error("Response is not HTML");
  return html;
}

try {
  const html = await generateFromServer();
  writeFileSync(shellPath, html, "utf-8");
  console.log("✓ Generated _shell.html via server render");
} catch (err) {
  console.error("✗ Server render failed:", err.message);
  process.exit(1);
}
