import fs from "fs";
import path from "path";

export function getMaterials() {
  const baseDir = path.resolve("public/material");
  const levels = ["inicial", "avanzado"] as const;

  const materials: Record<string, Record<string, string[]>> = {
    inicial: {},
    avanzado: {},
  };

  for (const level of levels) {
    const levelDir = path.join(baseDir, level);
    if (!fs.existsSync(levelDir)) continue;

    for (const date of fs.readdirSync(levelDir)) {
      if (date.startsWith(".")) continue; // Ignore dotfiles
      const dateDir = path.join(levelDir, date);
      if (!fs.statSync(dateDir).isDirectory()) continue;

      const files = fs
        .readdirSync(dateDir)
        .filter((file) => !file.startsWith(".")) // Ignore dotfiles
        .map((file) => `/material/${level}/${date}/${file}`);

      materials[level][date] = files;
    }
  }
  return materials;
}
