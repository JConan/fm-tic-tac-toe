import * as matchers from "vitest-dom/matchers";
import { expect, vi } from "vitest";
expect.extend(matchers);
import fs from "fs";
import path from "path";

// Utility function to read file content
const readFileContent = (filePath: string) => {
  return fs.readFileSync(path.resolve(__dirname, filePath), "utf8");
};
global.fetch = vi.fn((url) => {
  // Check if the URL starts with 'assets'
  if (url.startsWith("assets")) {
    // Modify the URL to add './public' prefix in order to manually load the file content
    url = `./public/${url}`;
    const response = new Response(readFileContent(url), {
      status: 200,
      headers: { "Content-Type": "image/svg+xml" },
    });
    return Promise.resolve(response);
  }

  return Promise.reject(new Error("Unknown URL"));
});
