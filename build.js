const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const myVar = process.env.MY_VAR ?? "(MISSING — not injected at build)";

console.log(`[build] MY_VAR seen at build: ${myVar}`);

const out = html.replace(/__MY_VAR__/g, myVar);
fs.writeFileSync("dist/index.html", out);
console.log(`[build] wrote dist/index.html (${out.length} bytes)`);
