import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const source = join(root, "static-site");
const output = join(root, "dist");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of [
  ".nojekyll",
  "index.html",
  "style.css",
  "promptkada.jpg",
  "samadhanam.jpg",
  "yadav.jpg",
  "yadav2.jpg",
]) {
  await cp(join(source, file), join(output, file));
}

console.log("Built static portfolio into dist/");
