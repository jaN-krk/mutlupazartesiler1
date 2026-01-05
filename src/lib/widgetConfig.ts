import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'widget.json');

export function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }
}

export function writeWidget(embed: string) {
  ensureDataDir();
  fs.writeFileSync(FILE_PATH, JSON.stringify({ embed }, null, 2), { encoding: 'utf-8' });
}

export function readWidget(): { embed: string } | null {
  try {
    if (!fs.existsSync(FILE_PATH)) return null;
    const txt = fs.readFileSync(FILE_PATH, { encoding: 'utf-8' });
    return JSON.parse(txt) as { embed: string };
  } catch (e) {
    return null;
  }
}

export function clearWidget() {
  try {
    if (fs.existsSync(FILE_PATH)) fs.unlinkSync(FILE_PATH);
  } catch (e) {
    // ignore
  }
}
