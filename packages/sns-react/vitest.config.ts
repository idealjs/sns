import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "@idealjs/sns-core": path.resolve(__dirname, "../sns-core/src/index.ts"),
    },
  },
});
