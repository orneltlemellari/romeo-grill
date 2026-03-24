const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dbPath = path.join(root, "romeo-grill.db");
const backupDir = path.join(root, "backups");

if (!fs.existsSync(dbPath)) {
  console.error("Database file not found:", dbPath);
  process.exit(1);
}

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const now = new Date();
const stamp = now.toISOString().replace(/[:.]/g, "-");
const backupPath = path.join(backupDir, `romeo-grill-backup-${stamp}.db`);

fs.copyFileSync(dbPath, backupPath);
console.log("Backup created:", backupPath);
