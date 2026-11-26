import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Synchronized self-checkout: pairs scan groceries to music, docked points each time the machine announces, 'Unexpected item in the bagging area.'";

// The gate takes one line of at most 200 characters; this writes exactly that.
function writeEntry(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
}

try {
  writeEntry("/output");
} catch {
  writeEntry(join(import.meta.dirname, "output"));
}
