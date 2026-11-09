export function internalTarget(href: string): string | null {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const path = href.split(/[?#]/)[0];
  return path.endsWith("/") ? `${path}index.html` : path;
}

export function extractHrefs(html: string): string[] {
  return [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
}
