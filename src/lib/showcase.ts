import fs from "fs";
import path from "path";
import type { ShowcaseItem, ShowcaseStatus } from "@/types/showcase";

const DATA_PATH = path.join(process.cwd(), "data", "showcase.json");

function ensureFile() {
  const dir = path.dirname(DATA_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_PATH)) fs.writeFileSync(DATA_PATH, "[]");
}

export function readItems(): ShowcaseItem[] {
  ensureFile();
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}

function writeItems(items: ShowcaseItem[]) {
  ensureFile();
  fs.writeFileSync(DATA_PATH, JSON.stringify(items, null, 2));
}

export function getApprovedItems(): ShowcaseItem[] {
  return readItems()
    .filter((i) => i.status === "approved")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function addItem(item: ShowcaseItem) {
  const items = readItems();
  items.push(item);
  writeItems(items);
}

export function updateStatus(id: string, status: ShowcaseStatus): boolean {
  const items = readItems();
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return false;
  items[idx].status = status;
  writeItems(items);
  return true;
}

export function deleteItem(id: string): boolean {
  const items = readItems();
  const filtered = items.filter((i) => i.id !== id);
  if (filtered.length === items.length) return false;
  writeItems(filtered);
  return true;
}
