import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import deno from "@deno/vite-plugin";

export default defineConfig({
  root: "./client",
  server: { port: 3000 },
  plugins: [preact(), deno()],
});
