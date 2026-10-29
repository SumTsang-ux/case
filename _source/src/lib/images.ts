/**
 * Image sources.
 * Portfolio images are hosted in the SumTsang-ux/work GitHub repo. To swap in new assets, either
 * upload files to that folder, or change BASE below to your own image host.
 *
 * Each image is tried in this order: resized version (fast) -> original -> clean placeholder.
 */
const REPO_PATH = "SumTsang-ux/work@main/img/portfolio/";

export const resized = (file: string, width: number) => {
  const raw = `raw.githubusercontent.com/SumTsang-ux/work/main/img/portfolio/${encodeURIComponent(file)}`;
  return `https://wsrv.nl/?url=${encodeURIComponent(raw)}&w=${width}&q=80&output=webp`;
};

export const original = (file: string) => `https://cdn.jsdelivr.net/gh/${REPO_PATH}${encodeURIComponent(file)}`;


/** Local copy: an "img" folder next to index.html in your own site repo. Tried first. */
export const local = (file: string) => `img/${encodeURIComponent(file)}`;

/** Resume PDF lives in the same local img/ folder. */
export const RESUME_URL = "img/resume_sumtsang.pdf";
