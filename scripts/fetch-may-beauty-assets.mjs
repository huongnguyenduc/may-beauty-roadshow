#!/usr/bin/env node
/**
 * Downloads May Beauty hero images from Figma MCP asset URLs and writes WebP to public/may-beauty/.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "may-beauty");

const ASSETS = [
  {
    name: "gradient",
    url: "https://www.figma.com/api/mcp/asset/f08a9f6d-be75-492a-a116-e8dc083a2a84",
  },
  {
    name: "sku",
    url: "https://www.figma.com/api/mcp/asset/d0fc0793-c965-4238-924b-09daf3a09caa",
  },
  {
    name: "podium",
    url: "https://www.figma.com/api/mcp/asset/81b6a61d-485b-49ea-ab23-d12b7ea74fd6",
  },
];

await fs.mkdir(outDir, { recursive: true });

for (const { name, url } of ASSETS) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${name}: GET ${url} -> ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(outDir, `${name}.webp`);
  await sharp(buf).webp({ quality: 90 }).toFile(dest);
  console.log("Wrote", path.relative(path.join(__dirname, ".."), dest));
}
