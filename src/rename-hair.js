const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "src/assets/hair/male/male_curly");

fs.readdirSync(folder).forEach((file) => {
  const ext = path.extname(file);
  if (ext !== ".png") return;

  const match = file.match(
    /_(black|blue2?|brown|blonde2?|dark|gold|gray|green2?|light|orange|pink|purple|red|silver|white|yellow)\.png$/i
  );
  if (match) {
    const color = match[1].toLowerCase();
    const oldPath = path.join(folder, file);
    const newPath = path.join(folder, `${color}.png`);

    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} → ${color}.png`);
    }
  }
});

console.log("✅ Renaming completed for male_curly.");
